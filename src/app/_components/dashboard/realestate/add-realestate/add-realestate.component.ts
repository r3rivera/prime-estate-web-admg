import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  UtilityService,
  UStateCode,
  PropertyType,
  CountryCode,
  FileUploadService,
} from 'src/app/_services/shared';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'r3app-add-realestate',
  templateUrl: './add-realestate.component.html',
  styleUrls: ['./add-realestate.component.scss'],
})
export class AddRealestateComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _fileUploadService: FileUploadService
  ) {}

  stateCode: UStateCode[];
  propertyType: PropertyType[];
  propertyStatus: { label: string; value: string }[];
  countryCodes: CountryCode[];

  estateForm: FormGroup;

  /* File Upload Parameters */
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  files = [];

  ngOnInit(): void {
    this.stateCode = UtilityService.getStateNameCode();
    this.propertyType = UtilityService.getRealEstatePropertyType();
    this.propertyStatus = UtilityService.getRealEstatePropertyStatus();
    this.countryCodes = UtilityService.getCountryCodes();

    this.estateForm = this._formBuilder.group({
      streetname1: new FormControl(null, [Validators.required]),
      streetname2: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      country: new FormControl('US', [Validators.required]),

      bed: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      bath: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      garage: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),

      lot: new FormControl(null, [Validators.required]),
      floor: new FormControl(null, [Validators.required]),
      type: new FormControl('SFM', [Validators.required]),
      featured: new FormControl(false),

      price: new FormControl(null, [Validators.required]),
      status: new FormControl('Active', [Validators.required]),
    });
  }

  onCreateProperty(): void {
    console.log('Creating property...');
    console.log(JSON.stringify(this.estateForm.value));
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this._fileUploadService.upload(formData, '/property/admin/catalog/upload').pipe(
        map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              file.progress = Math.round((event.loaded * 100) / event.total);
              break;
            case HttpEventType.Response:
              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          file.inProgress = false;
          return of(`${file.data.name} upload failed.`);
        })
      )
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          console.log(event.body);
        }
      });
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach((file) => {
      this.uploadFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;

    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }
}

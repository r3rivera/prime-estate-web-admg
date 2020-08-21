import { Component, OnInit } from '@angular/core';
import {
  UtilityService,
  UStateCode,
  PropertyType,
  CountryCode,
} from 'src/app/_services/shared';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FileUpload } from 'src/app/_components/common';
import { RealEstate } from '../models/realestate.model';
import { RealEstateService } from 'src/app/_services/real-estate/real-estate.service';
import { AlertService } from 'src/app/_services/notification/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'r3app-add-realestate',
  templateUrl: './add-realestate.component.html',
  styleUrls: ['./add-realestate.component.scss'],
})
export class AddRealestateComponent implements OnInit {

  stateCode: UStateCode[];
  propertyType: PropertyType[];
  propertyStatus: { label: string; value: string }[];
  countryCodes: CountryCode[];

  estateForm: FormGroup;

  private uploadedImage: FileUpload[];


  constructor(private _formBuilder: FormBuilder, private _realEstateService: RealEstateService,
    private _route: ActivatedRoute, private _router: Router, private _alertService: AlertService) {}





  ngOnInit(): void {

    this.uploadedImage = [];
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
    const realEstateRequest:RealEstate = {
      address: {
        streetName1: this.estateForm.get('streetname1').value,
        streetName2: this.estateForm.get('streetname2').value,
        city: this.estateForm.get('city').value,
        stateProvince: this.estateForm.get('state').value,
        zipCode: this.estateForm.get('zip').value,
        country: this.estateForm.get('country').value
      },
      amenities: [
        {name:'Bed', value: this.estateForm.get('bed').value},
        {name:'Bath', value: this.estateForm.get('bath').value},
        {name:'Garage', value: this.estateForm.get('garage').value}
      ],
      images: [],
      price: this.estateForm.get('price').value,
      lot: this.estateForm.get('lot').value,
      area: this.estateForm.get('floor').value,
      type: this.estateForm.get('type').value,
      estateStatus: this.estateForm.get('status').value,
      featured: this.estateForm.get('featured').value
    };

    if(this.uploadedImage){
      for( let img of this.uploadedImage){
        realEstateRequest.images.push({
          imageId: img.fileId
        });
      }
    }
    console.log("Sending to the service...");
    this._realEstateService.createProperty(realEstateRequest).subscribe(resp => {
      console.log("Success...");
      console.log(resp);

      this._router.navigate(['/manage-estate', resp.realEstateId], {relativeTo: this._route.parent});

    }, err => {
      console.log("Error...");
    });
  }

  /**
   *
   * @param images Captures the event provided by the component emitting a file upload.
   */
  onFileUploadEvent(images: FileUpload[]): void{
    for(let img of images){
      this.uploadedImage.push(img);
    }

    console.log("File upload data hand off...");
  }


  fileUploadApi(): string{
    return '/property/admin/catalog/upload';
  }
}

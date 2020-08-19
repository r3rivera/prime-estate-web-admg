import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { FileUploadService } from 'src/app/_services/shared';
import { AppResponse } from 'src/app/_models';
import { AlertService } from 'src/app/_services/notification/alert.service';

@Component({
  selector: 'r3app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  /* File Upload Parameters */
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;

  /** Notifies any component that uses the upload component */
  @Output('FileUploadResponseEvent') uploadResponseEvent = new EventEmitter<FileUpload[]>();

  files = [];

  constructor(private _fileUploadService: FileUploadService, private _alertService: AlertService) {}

  ngOnInit(): void {}


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
          const resp:AppResponse = event.body;
          console.log(JSON.stringify(resp));
          if(resp.status == 0){
            this.uploadResponseEvent.emit(resp.data);
          }
        }
      }, error => {
        console.log("Error performing an uplaod!");
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

export interface FileUpload{
  fileId: string;
  fileName: string;
}

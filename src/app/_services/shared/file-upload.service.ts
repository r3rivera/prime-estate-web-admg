import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';

@Injectable({providedIn: 'root'})
export class FileUploadService extends BaseService{


  constructor(private _httpClient: HttpClient) {
    super();
  }

  upload(formData: FormData, api: string): Observable<any>{


    const targetUri: string = this.getApiEndpoint(api);
    console.log("Upload URI is " + targetUri);

    return this._httpClient.post<any>(targetUri, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }



}

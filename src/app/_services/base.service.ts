import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  generateAuthorization(username : string, password : string) : string {
    let auth = btoa(`${username}:${password}`);
    return `Basic ${auth}`;
  }

  generateBasicAuthHeader(username : string, password : string) : HttpHeaders {
    let header = new HttpHeaders()
    .append("Authorization", this.generateAuthorization(username, password))
    .append("x-r3app-appcode", environment.appCode);
    return header;
  }

  getApiEndpoint(apiUri: string) : string {
    return `${environment.api}${apiUri}`;
  }

  getBasePath() : string {
    return environment.api
  }
}

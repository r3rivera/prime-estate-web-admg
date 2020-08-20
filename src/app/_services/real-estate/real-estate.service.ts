import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { RealEstate } from 'src/app/_components/dashboard/realestate/models/realestate.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RealEstateService extends BaseService{

  constructor(private _httpClient: HttpClient) {
    super();
  }

  createProperty(estateRequest: RealEstate): Observable<RealEstate> {
    console.log("Servicing the creation of property...");

    const apiUri = this.getApiEndpoint('/property/admin/catalog');
    return this._httpClient.post<any>(apiUri, estateRequest).pipe(map( resp => {
      if(resp.status == 0 && resp.data){
        return resp.data;

      }
    } ));
  }
}
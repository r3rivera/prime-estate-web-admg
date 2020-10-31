import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../base.service';

/**
 * Service for managing the application of the user
 */
@Injectable({
  providedIn: 'root'
})
export class UserApplicationService extends BaseService{

  constructor(private _httpClient: HttpClient) {
    super();
  }


  createInvite(request: UserInvite): Observable<UserInvite>{
    return this._httpClient.post<any>(super.getApiEndpoint('/admin/invite-user'), request)
      .pipe(map(resp => {
        if(resp.status === 0 && resp.data){
          return resp.data;
        }
      }
      ));
  }


  getAllInvitedUsers(): Observable<UserInvite[]>{
    return this._httpClient.get<any>(super.getApiEndpoint('/admin/invite-user'))
      .pipe(map(resp => {
        if(resp.status === 0 && resp.data){
          return resp.data;
        }
      }
    ));
  }

}



export interface UserInvite{

  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  initialMoveDate: string
  monthlyRentalAmount: number;
  securityDepositAmount: number;
  leaseTerm: number;
  address: MLSAddress;

}

export interface MLSAddress{
  mlsIdentifier?: string;
  agent: string;
  streetName1: string;
  streetName2?: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  country: string;
}

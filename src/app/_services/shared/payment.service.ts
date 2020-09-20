import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({ providedIn: 'root'})
export class PaymentService extends BaseService{

  constructor(private _httpClient: HttpClient) { super(); }

  getCheckoutSession(productId: string): Observable<string>{

    const url: string = this.getApiEndpoint("/payment/checkout");
    console.log("Getting stripe checkout session! URL " + url );

    return this._httpClient.get<any>(url,{}).pipe(map(resp => {
      if(resp.status === 0){
        return resp.data;
      }

      return "";
    }))
  }




}

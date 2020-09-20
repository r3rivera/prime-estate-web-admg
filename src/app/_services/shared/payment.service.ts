import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({ providedIn: 'root'})
export class PaymentService extends BaseService{

  constructor(private _httpClient: HttpClient) { super(); }

  getCheckoutSession(productId: string): Observable<string>{

    const url: string = this.getApiEndpoint('/payment/checkout');
    console.log("Getting stripe checkout session! URL " + url );

    return this._httpClient.get<any>(url,{}).pipe(map(resp => {
      if(resp.status !== 0){
        throw Error("Unexpected response found!");
      }
     return resp.data;
    }));
  }

  makeCharge(payment: any): Observable<boolean>{

    const url: string = this.getApiEndpoint('/payment/charge');
    console.log("Processing a card charge! URL " + url);
    return this._httpClient.post<any>(url, payment).pipe(map(resp => {
      if(resp.status !== 0){
        throw Error("Unexpected response charge found!");
      }
      return resp.data;
    }));
  }


}

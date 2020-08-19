import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { RealEstate } from 'src/app/_components/dashboard/realestate/models/realestate.model';

@Injectable({providedIn: 'root'})
export class RealEstateService extends BaseService{

  constructor(private _httpClient: HttpClient) {
    super();
  }

  createProperty(estateRequest: RealEstate): void {
    console.log(estateRequest);
  }
}

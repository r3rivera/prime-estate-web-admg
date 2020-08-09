import { Component, OnInit } from '@angular/core';
import { UtilityService, UStateCode, PropertyType, CountryCode } from 'src/app/_services/shared';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'r3app-add-realestate',
  templateUrl: './add-realestate.component.html',
  styleUrls: ['./add-realestate.component.scss']
})
export class AddRealestateComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  stateCode: UStateCode[];
  propertyType: PropertyType[];
  propertyStatus: {label:string, value: string}[];
  countryCodes: CountryCode[]

  ngOnInit(): void {


    this.stateCode = UtilityService.getStateNameCode();
    this.propertyType = UtilityService.getRealEstatePropertyType();
    this.propertyStatus = UtilityService.getRealEstatePropertyStatus();
    this.countryCodes = UtilityService.getCountryCodes();


  }

}

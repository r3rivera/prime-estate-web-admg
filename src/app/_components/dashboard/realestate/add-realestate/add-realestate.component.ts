import { Component, OnInit } from '@angular/core';
import { UtilityService, UStateCode, PropertyType } from 'src/app/_services/shared';


@Component({
  selector: 'r3app-add-realestate',
  templateUrl: './add-realestate.component.html',
  styleUrls: ['./add-realestate.component.scss']
})
export class AddRealestateComponent implements OnInit {

  constructor() { }

  stateCode: UStateCode[];
  propertyType: PropertyType[];
  propertyStatus: {label:string, value: string}[];

  ngOnInit(): void {
    this.stateCode = UtilityService.getStateNameCode();
    this.propertyType = UtilityService.getRealEstatePropertyType();
    this.propertyStatus = UtilityService.getRealEstatePropertyStatus();
  }

}

import { Component, OnInit } from '@angular/core';
import { UtilityService, UStateCode, PropertyType, CountryCode } from 'src/app/_services/shared';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


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


  estateForm: FormGroup;

  ngOnInit(): void {


    this.stateCode = UtilityService.getStateNameCode();
    this.propertyType = UtilityService.getRealEstatePropertyType();
    this.propertyStatus = UtilityService.getRealEstatePropertyStatus();
    this.countryCodes = UtilityService.getCountryCodes();

    this.estateForm = this._formBuilder.group({
      streetname1: new FormControl(null, [Validators.required]),
      streetname2: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      country: new FormControl("US", [Validators.required]),

      bed: new FormControl(0, [Validators.required, Validators.pattern("[0-9]*")]),
      bath: new FormControl(0, [Validators.required, Validators.pattern("[0-9]*")]),
      garage: new FormControl(0, [Validators.required, Validators.pattern("[0-9]*")]),

      lot: new FormControl(null, [Validators.required]),
      floor: new FormControl(null, [Validators.required]),
      type: new FormControl("SFM", [Validators.required]),
      featured: new FormControl(false),

      price: new FormControl(null, [Validators.required]),
      status: new FormControl("Active", [Validators.required])
    });

  }

  onCreateProperty():void{
    console.log("Creating property...");
    console.log(JSON.stringify(this.estateForm.value));

  }

}

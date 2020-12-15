import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from 'src/app/_services/notification/alert.service';
import { RealEstateService } from 'src/app/_services/real-estate/real-estate.service';
import { RealEstate } from './models/realestate.model';

@Component({
  selector: 'r3app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.scss']
})
export class RealestateComponent implements OnInit {

  propertyAdresses: RealEstate[]
  columnsToDisplay = ['Street Name', 'City', 'State', 'Zip Code', 'Price', 'Lot Area'];
  expandedElement: RealEstate | null;

  constructor( private _realEstateService: RealEstateService,
    private _route: ActivatedRoute, private _router: Router, private _alertService: AlertService) {}

  ngOnInit(): void {
    this._realEstateService.getProperties(true, true).subscribe(
      resp =>{
        this.propertyAdresses = resp;
      },
      error =>{

      });

  }

}



import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { RealEstate } from '../models/realestate.model';
import { RealEstateService } from 'src/app/_services/real-estate/real-estate.service';
import { AlertService } from 'src/app/_services/notification/alert.service';

@Component({
  selector: 'r3app-edit-realestate',
  templateUrl: './edit-realestate.component.html',
  styleUrls: ['./edit-realestate.component.scss']
})
export class EditRealestateComponent implements OnInit {

  realEstateId: string;
  realEstate: RealEstate;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _realEstateService: RealEstateService,
    private _alertService: AlertService  ) {}

  ngOnInit(): void {

    // Works only if we are not coming from the same component.
    const estateId = this._route.snapshot.paramMap.get('estateid');
    console.log(`${estateId} id the selected Real Estate ID.`);

    this.realEstateId = estateId;
    this._realEstateService.getProperty(estateId).subscribe(resp => {
      this.realEstate = resp;
    }, error => {
      console.error(error);
    });

    // Snippet below is need only if we need to navigate to the same path but with a different parameter within this component.
    //this._route.params.subscribe(
    //  (params: Params) => {
    //
    //  }
    //);
  }

}

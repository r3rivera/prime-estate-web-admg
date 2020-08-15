import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services/notification/alert.service';

@Component({
  selector: 'r3app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(    private _alertService: AlertService,
    private _route: ActivatedRoute,
    private _router: Router){}


  ngOnInit(): void {}

  onLogin(): void{
    console.log("Navigating to login screen...");
    this._router.navigate(['/login']);
  }

}

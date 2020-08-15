import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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

  items: MenuItem[];

  home: MenuItem;

  ngOnInit(): void {
      this.items = [
          {label: 'Home'},
          {label: 'Featured Properties'},
          {label: 'Testimonials'},
          {label: 'About Us'}
      ];

      this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  onLogin(): void{
    console.log("Navigating to login screen...");
    this._router.navigate(['/login']);
  }

}

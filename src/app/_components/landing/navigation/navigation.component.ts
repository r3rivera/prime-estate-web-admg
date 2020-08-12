import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'r3app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

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
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'r3app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {

  isSidebarDisplayed: boolean;

  toggleSideBarVisibility(): void {
    this.isSidebarDisplayed = !this.isSidebarDisplayed;
  }

  constructor() {}

  ngOnInit() {
  }

}

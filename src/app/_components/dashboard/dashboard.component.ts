import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r3app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  isSidebarDisplayed: boolean;



  toggleSideBarVisibility(): void {
    this.isSidebarDisplayed = !this.isSidebarDisplayed;
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'r3app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  isSidebarDisplayed: boolean;

  menuItems: MenuItem[];

  toggleSideBarVisibility(): void {
    this.isSidebarDisplayed = !this.isSidebarDisplayed;
  }

  ngOnInit() {

    this.menuItems = [
      {
        label: 'Management',
        items: [
          { label: 'Real Estate', icon: 'pi pi-fw pi-home' },
          { label: 'Download', icon: 'pi pi-fw pi-download' },
        ],
      },
      {
        label: 'Tenants and Owners',
        items: [
          { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
          { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' },
        ],
      },
    ];




  }
}

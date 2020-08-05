import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'r3app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
        label: 'Real Estate Management',
        items: [
          {
              label: 'Real Estate',
              icon: 'pi pi-fw pi-home',
              routerLink: ['/dashboard/real-estates'],
              routerLinkActiveOptions: { exact: true },
              styleClass:'sidebar-menus'},
          { label: 'Thrid Party', icon: 'pi pi-fw pi-globe' },
        ],
      },
      {
        label: 'Tenants and Owners',
        items: [
          { label: 'Tenant Application', icon: 'pi pi-fw pi-user-plus' },
          { label: 'Manage Tenant and Owners', icon: 'pi pi-fw pi-users' },
        ],
      },
      {
        label: 'Service Request',
        items: [
          { label: 'My Contractors', icon: 'pi pi-fw pi-folder'},
          { label: 'Manage Service Request', icon: 'pi pi-fw pi-ticket' },
        ],
      },
    ];




  }
}

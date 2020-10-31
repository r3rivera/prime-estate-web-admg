import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r3app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  navlinks: NavLink[] = [
    {
      url: '/dashboard/real-estates',
      name: 'Property Estate',
      icon: 'home'
    },
    {
      url: '/dashboard/create-estate',
      name: 'Create Estate',
      icon: 'house'
    },
    {
      url: '/dashboard/manage-users',
      name: 'Manage Users',
      icon: 'contact_page'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface NavLink{
  url: string;
  name: string;
  icon: string;
}


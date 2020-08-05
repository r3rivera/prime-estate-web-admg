import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticateService } from 'src/app/_services/security/authenticate.service';

@Component({
  selector: 'r3app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  profileMenu: MenuItem[];
  constructor(private _authservice: AuthenticateService) { }

  ngOnInit(): void {
    this.profileMenu = [{
      label: 'Logout',
      icon : "pi pi-power-off",
      command : () => {
        this.logOut();
      }
    }];

  }

  private logOut(): void{

  }



}

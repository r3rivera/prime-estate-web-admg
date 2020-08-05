import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticateService } from 'src/app/_services/security/authenticate.service';

@Component({
  selector: 'r3app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  profileMenu: MenuItem[];
  constructor(private _authservice: AuthenticateService) {}

  ngOnInit(): void {
    this.profileMenu = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        command: () => {
          this.profile();
        },
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
          this.profile();
        },
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logOut();
        },
      },
    ];
  }

  private logOut(): void {}
  private profile(): void {}
}

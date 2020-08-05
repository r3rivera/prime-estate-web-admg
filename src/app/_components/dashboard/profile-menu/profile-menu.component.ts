import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticateService } from 'src/app/_services/security/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'r3app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

  profileMenu: MenuItem[];

  constructor(private _authservice: AuthenticateService, private _router: Router) {}

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

  public get userName(): string{
    return `${this._authservice.currentAuthUser.firstname} ${this._authservice.currentAuthUser.lastname}`;
  }

  private logOut(): void {
    if(this._authservice.logoutUser()){
      this._router.navigate(['/login']);
    }
  }

  private profile(): void {}
}

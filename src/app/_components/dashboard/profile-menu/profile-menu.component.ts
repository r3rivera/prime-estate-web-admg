import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/_services/security/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'r3app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

  constructor(private _authservice: AuthenticateService, private _router: Router) {}

  ngOnInit(): void {
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

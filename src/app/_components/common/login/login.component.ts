import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthenticateService } from 'src/app/_services/security/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/notification/alert.service';

@Component({
  selector: 'r3app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticateService,
    private _alertService: AlertService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  loginForm: FormGroup;
  loginSubmitted: boolean;
  returnUrl: string;

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });

    this.loginSubmitted = false;
    this.returnUrl =
      this._route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onLoginUser(): void {
    this.loginSubmitted = true;

    if (this.loginForm.invalid && this.loginSubmitted) {
      console.log('Login Form is not valid!');
      return;
    }

    this._alertService.clear();
    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;


    this._authService
      .authenticateUser(username, password)
      .pipe(first())
      .subscribe(
        (data) => {
          this._router.navigate([this.returnUrl]);
        },
        (error) => {
          console.log(`Handling error response :: ${JSON.stringify(error)}`);
          this._alertService.error({
            "code": error.code,
            "message" : error.message,
            "type": "error"
          });
          this.loginSubmitted = false;
        }
      );
  }

  isNotValidField(field: string): boolean {
    if (
      this.loginSubmitted &&
      this.loginForm.get(field) &&
      this.loginForm.get(field).hasError('required')
    ) {
      return true;
    }
    return false;
  }

  isNotValidEmailFiled(field: string): boolean {
    if (
      this.loginSubmitted &&
      this.loginForm.get(field) &&
      this.loginForm.get(field).hasError('email')
    ) {
      return true;
    }
    return false;
  }
}

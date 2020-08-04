import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/_services/security/authenticate.service';

@Component({
  selector: 'r3app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _authService: AuthenticateService) { }

  loginForm: FormGroup;
  loginSubmitted: boolean;

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
        'username': new FormControl(null, [ Validators.required, Validators.email ]),
        'password': new FormControl(null, [ Validators.required ])
    });

    this.loginSubmitted = false;

  }

  onLoginUser(): void{
    this.loginSubmitted = true;

    if(this.loginForm.invalid && this.loginSubmitted){
      console.log("Login Form is not valid!");
      return;
    }

    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;
    this._authService.authenticateUser(username, password);

  }

  isNotValidField(field:string) : boolean{
    if(this.loginSubmitted && this.loginForm.get(field) && this.loginForm.get(field).hasError('required')){
      return true;
    }
    return false;
  }

  isNotValidEmailFiled(field:string) : boolean{
    if(this.loginSubmitted && this.loginForm.get(field) && this.loginForm.get(field).hasError('email')){
      return true;
    }
    return false;
  }

}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthUser } from 'src/app/_models/user';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService extends BaseService{

  //Emits the last value
  private currUser = new BehaviorSubject<AuthUser>(ANONYMOUS_USER);
  user$: Observable<AuthUser> = this.currUser.asObservable();


  constructor(private _httpClient: HttpClient) {
    super();
  }



  /**
   * Authenticates the user using their credentials
   * @param username
   * @param password
   */
  authenticateUser(username: string, password: string): Observable<AuthUser>{

    const url = `${this.getApiEndpoint("/authenticate")}`;

    console.log("Authservice:: " + username + ", target is " + url);
    const headerMap = this.generateBasicAuthHeader(username, password);

    return this._httpClient.post<any>(url, {}, { headers: headerMap })
    .pipe(map(resp => {

        let token:string = resp.data;
        let jwtContent: JwtContent = JSON.parse(atob(token.split('.')[1]));
        let appUser: AuthUser = {
            'username': jwtContent.sub,
            'firstname': jwtContent.userinfo.firstName,
            'lastname': jwtContent.userinfo.lastName,
            'token': token,
            'roles': jwtContent.roles
        };

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const response: string = JSON.stringify(appUser);
        console.log("Response is " + response);

        localStorage.setItem('currentUser', response);
        this.currUser.next(appUser);
        return appUser;
    }));
  }

  logoutUser(): boolean{
    this.currUser.next(ANONYMOUS_USER);
    if(this.currUser.value.username === undefined){
      localStorage.removeItem('currentUser');
      console.log("Cleared storage of user!");
    }

    if(!localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }

  /**
   * Sign up a new user to the application
   *
   */
  signUpUser(): void{

  }

  public get currentAuthUser(): AuthUser{
    return this.currUser.value;
  }
}


export const ANONYMOUS_USER : AuthUser = {
  username: undefined,
  firstname: "",
  lastname: ""
}

class JwtContent{
  aud: string;
  sub: string;
  roles: string[];
  userinfo:{
      firstName: string;
      lastName: string;
  }
}

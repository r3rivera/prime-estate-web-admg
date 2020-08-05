import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthzGuard implements CanActivate {

 constructor(
    private _router: Router,
    private _authenticationService: AuthenticateService
  ) {}


  /*
   * Validate that the active route is accessible to the current user based on the user's role.
   */
  canActivate( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const currentUser = this._authenticationService.currentAuthUser;
      console.log(JSON.stringify(currentUser));
      if (currentUser && currentUser.username) {

          if (route.data?.roles) {

            if(this.hasUserRole(route.data.roles)){
              // role not authorised so redirect to home page
              this._router.navigate(['/dashboard']);
              console.log("Not Authorized!");
              return false;
            }
          }

        // Handles routes where there is no roles needed to access the route defined in the app routing module.
        return true;
      }

      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }


  private hasUserRole(roles:String[]): boolean {
    const currentUser = this._authenticationService.currentAuthUser;
    roles.find(x => {
      return (x === currentUser.roles?.find(y => y === x));
    });
    return false;
  }


}

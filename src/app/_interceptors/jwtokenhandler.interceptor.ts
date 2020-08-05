import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthenticateService } from '../_services/security/authenticate.service';
import { environment } from '../../environments/environment';

@Injectable()
export class JwtokenhandlerInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthenticateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.debug("TokenInterceptor...");
    // add authorization header with jwt token if available
    let currentUser = this._authService.currentAuthUser;

    if (currentUser && currentUser.token) {
      request = request.clone({
            setHeaders: {
                "x-r3app-token": `${currentUser.token}`,
                "x-r3app-userid": `${currentUser.username}`
            }
        });
    }

    request = request.clone({
        setHeaders: {
            "x-r3app-appcode": `${environment.appCode}`
        }
    });

    return next.handle(request);
  }
}

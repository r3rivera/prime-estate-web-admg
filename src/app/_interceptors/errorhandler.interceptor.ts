import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticateService } from '../_services/security/authenticate.service';
import { AppAlert } from '../_services/notification/alert.service';

@Injectable()
export class ErrorhandlerInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthenticateService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AppAlert>> {

    console.debug("ErrorInterceptor...");
    return next.handle(req).pipe(catchError(err => {
        const alert = new AppAlert();
        if (err.status === 401) {
            this._authService.logoutUser();
            alert.type = "error";
            //location.reload(true);
        }

        alert.code = err.error.code || "WEBGEN5000";
        alert.message = err.error.message || "Unhandled Error Response";
        return throwError(alert);
    }));
}
}

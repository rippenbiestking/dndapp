import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { AuthService } from './api/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authRequest = this.authService.addAuthHeader(request);
    return next.handle(authRequest).pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authService.refresh().pipe(
            switchMap(() => next.handle(this.authService.addAuthHeader(request))),
            catchError(err => {
              if (error.status === 401) {
                this.authService.logout();
                return this.router.navigateByUrl('/login').then(
                  () => {
                    throw new Error(err);
                  }
                );
              }
              return throwError(() => err);;
            })
          );
        }
        return throwError(() => error);
      }),
    );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export type TokenResponse = {
  access: string,
  refresh: string,
};

export type TokenRequest = {
  username: string,
  password: string,
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token?: TokenResponse;

  constructor(
    private http: HttpClient,
  ) { }

  login(tokenRequest: TokenRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('/api/token/', tokenRequest).pipe(
      tap(token => this.token = token),
    );
  }

  logout(): void {
    this.token = undefined;
  }

  addAuthHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return this.token ? request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.token.access}`)
    }) : request;
  }
}

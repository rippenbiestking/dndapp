import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../storage.service';

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
  private _token?: TokenResponse;

  set token(t: TokenResponse | undefined) {
    if (t) {
      this.storage.set('access', t.access);
      this.storage.set('refresh', t.refresh);
    } else {
      this.storage.clear('access');
      this.storage.clear('refresh');
    }
    this._token = t;
  }

  get token(): TokenResponse | undefined {
    return this._token;
  }

  constructor(
    private storage: StorageService,
    private http: HttpClient,
  ) {
    const access = this.storage.get('access');
    const refresh = this.storage.get('refresh');
    if (access && refresh) {
      this._token = {
        access,
        refresh,
      }
    }
  }

  login(tokenRequest: TokenRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('/api/token/', tokenRequest).pipe(
      tap(token => this.token = token),
    );
  }

  register(userInfo: any): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('/api/register/', userInfo).pipe(
      tap(token => this.token = token),
    )
  }

  logout(): void {
    this.token = undefined;
  }

  addAuthHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return this.token ? request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.token.access}`),
    }) : request;
  }

  refresh(): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('/api/token/refresh/', {refresh: this.token?.refresh}).pipe(
      tap(token => this.token = token)
    );
  }
}

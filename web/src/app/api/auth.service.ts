import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(
    private http: HttpClient,
  ) { }

  login(tokenRequest: TokenRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('/api/token/', tokenRequest);
  }
}

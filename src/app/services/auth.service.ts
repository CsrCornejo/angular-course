import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "./../../environments/environment";
import { Auth } from '../models/auth.module';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password })
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }

  getProfile() {
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/profile`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {TokenResponse} from '../models/TokenResponse';
import {TokenPayload} from '../models/TokenPayload';
import {UserDetails} from '../models/UserDetails';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
      
    localStorage.setItem('usertoken', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      /* payload = token.split('.')[1];
      payload = window.atob(payload); */
      return JSON.parse(token);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    /* console.log('isloggedin');
    console.log(user); */
    
    
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`http://localhost:3000/user/register`, user);
  }

  public getUserById(id): Observable<any> {
    const token = this.getToken();
    console.log('get token');
    
    console.log(JSON.parse(token).token);
    
     let  url='http://localhost:4000/api/users/'+id;
    return this.http.get(url, {
        headers: { Authorization:  (JSON.parse(token).token).toString()}
      });
  }

  public login(user: TokenPayload): Observable<any> {
      console.log("login client");
    console.log(user);
    
    const base = this.http.post(`http://localhost:4000/api/users/authenticate`, user);

    const request = base.pipe(
        map((data: TokenPayload) => {
          if (!(data.toString()=="Username or password is incorrect")) {
            this.saveToken(JSON.stringify(data));
          }
          console.log(data);
          return data;
        })
    );

    return request;
  }

  public profile(): Observable<any> {
    return this.http.get(`http://localhost:3000/user/profile`, {
      headers: { Authorization: ` ${this.getToken()}` }
    });
  }
  public allUser(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(`http://localhost:3000/user/allusers`, {
      headers: { Authorization: ` ${this.getToken()}` }
    });
  }
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('usertoken');
    this.router.navigateByUrl('/auth/sign-in');
  }


}

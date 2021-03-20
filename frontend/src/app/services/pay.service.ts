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
export class PayService {
  
    constructor(private http: HttpClient, private router: Router) {}

    public pay(info) :Observable<any>{
      
        return this.http.post(`http://localhost:4000/api/pay/payment` , info);
      }


}

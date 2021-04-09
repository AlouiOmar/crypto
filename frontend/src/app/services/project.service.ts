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
export class ProjectService {
  
    constructor(private http: HttpClient, private router: Router) {}

      public add(data) :Observable<any>{
      
        return this.http.post(`http://localhost:4000/api/project/add` , data);
      }

      public getAll() :Observable<any>{
      
        return this.http.get(`http://localhost:4000/api/project/`);
      }

      public getById(id) :Observable<any>{
      const url="http://localhost:4000/api/project/"+id
        return this.http.get(url);
      }

      public invest(data) :Observable<any>{
      
        return this.http.post(`http://localhost:4000/api/project/invest` , data);
      }

}

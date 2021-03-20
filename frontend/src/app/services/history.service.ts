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
export class HistoryService {
  
    constructor(private http: HttpClient, private router: Router) {}

    public getAll() {
        return this.http.get<UserDetails[]>(`http://localhost:4000/api/history/`);
      }

      public delete(id) {
        const url='http://localhost:4000/api/history/'+id;
        return this.http.delete(url);
      }

    

}

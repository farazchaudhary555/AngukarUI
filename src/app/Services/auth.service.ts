import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseURL = environment.apiUrl;
  
constructor(private http : HttpClient) { }

login(Credentials:any): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/login`, Credentials);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FormAPIService {

private baseURL = environment.apiUrl;


  constructor(private http:HttpClient) { }

  //Employee APIs
  addemployee(employeeData:any):Observable<any>{
    return this.http.post(`${this.baseURL}/employees`,employeeData);
  }

  getemployee():Observable<any>{
    return this.http.get(`${this.baseURL}/getemployees`,);
  }

  //Client APIs
  addclient(clientData:any):Observable<any>{
    return this.http.post(`${this.baseURL}/clients`,clientData);
  }

  getclient():Observable<any>{
    return this.http.get(`${this.baseURL}/getclient`,);
  }

  //Product APIs
  addproduct(productData:any):Observable<any>{
    return this.http.post(`${this.baseURL}/products`,productData);
  }

  getproduct():Observable<any>{
    return this.http.get(`${this.baseURL}/getproducts`,);
  }

}

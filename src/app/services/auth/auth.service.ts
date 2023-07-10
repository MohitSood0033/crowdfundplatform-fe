import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
const AUTH_API = environment.baseUrl;
const token = localStorage.getItem('token')
const httpOptions = {
  headers: new HttpHeaders({
    "X-Custom-Header": "application/json",
    "x-access-token":token as string,
   "Access-Control-Allow-Headers": "Content-Type,Access-Control-Allow-Headers,lang"

  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  register(name: any,email: any,mobile: any, password: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name,email,mobile,password
    }, httpOptions);
  }
  login(mobile: any, password: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      mobile,password
    }, httpOptions);
  }
  verify(email: any,mobile: any): Observable<any> {
    return this.http.post(AUTH_API + 'verify', {
      name,email,mobile
    }, httpOptions);
  }
  createCampaign(title: any,description: any,targetAmount: any): Observable<any> {
    return this.http.post(AUTH_API + 'create-campaign', {
      title,description,targetAmount
    }, httpOptions);
  }
  makeTransaction(campaignId: any,amount: any): Observable<any> {
    return this.http.post(AUTH_API + 'transactions', {
      campaignId,amount
    }, httpOptions);
  }
  getCampaigns(): Observable<any> {
    return this.http.get(AUTH_API + 'getCampaigns', httpOptions)
  }
  getUsers(): Observable<any> {
    return this.http.get(AUTH_API + 'getUsers', httpOptions)
  }
  getUsersById(): Observable<any> {
    return this.http.post(AUTH_API + 'getUsersById', { }, httpOptions);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}

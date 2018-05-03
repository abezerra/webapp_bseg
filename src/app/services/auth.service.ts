import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import api from '../../environments/api';
import {Http} from "@angular/http";
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService{

  public token_id: string
  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}

  constructor(private router: Router, private http: HttpClient){}


  public authenticated_user(): boolean {

    if( this.token_id === undefined && localStorage.getItem('token')){
      this.token_id = localStorage.getItem('token')
    }

    if(this.token_id === undefined){
      this.router.navigate(['/auth'])
    }
    return this.token_id !== undefined

  }
  //
  // public signin(email, password): Promise<any>{
  //   return this.http.post(`${this.apiUrl}/authenticate`, {email: email, password: password})
  //     .toPromise()
  //     .then( res =>  res)
  //     .then( res => {
  //        if(!res.success.token){
  //          return false;
  //        }
  //
  //       this.router.navigate((['/dashboard']))
  //     })
  //     .catch( err =>  err.json())
  // }


  public signin(data): Observable<any>{
           return this.http
                .post(`${this.apiUrl}/authenticate`, data)
  }

  public signout(){
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }

  public signup(): void{

  }

  public logout(): void{

  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getAuthenticatedUser(): Observable<any>{
    return this.http.get(`${this.apiUrl}/user`, this.options)
  }

  public user(): Observable<any>{
    return this.http.get(`${this.apiUrl}/user`, this.options)
  }
}

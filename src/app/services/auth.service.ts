import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import api from '../../environments/api';
import {Http} from "@angular/http";
import 'rxjs/operator/toPromise'

@Injectable()
export class AuthService{

  public token_id: string
  public apiUrl = api.apiUrl;
  constructor(private router: Router, private http: Http){}


  public authenticated_user(): boolean {

    if( this.token_id === undefined && localStorage.getItem('token')){
      this.token_id = localStorage.getItem('token')
    }

    if(this.token_id === undefined){
      this.router.navigate(['/auth'])
    }
    return this.token_id !== undefined

  }

  public signin(email, password): Promise<any>{
    return this.http.post(`${this.apiUrl}/authenticate`, {email: email, password: password})
      .toPromise()
      .then( res =>  res.json())
      .then( res => {
         if(!res.success.token){
           return false;
         }
        localStorage.setItem('token', res.success.token)
        this.router.navigate((['/dashboard']))
      })
      .catch( err =>  err.json())
  }

  public signup(): void{

  }

  public logout(): void{

  }
}

import { Injectable } from '@angular/core'
import {Http} from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {logger} from "codelyzer/util/logger";
import {HttpService} from "./http.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BrokerService {

  public apiUrl = api.apiUrl;

  public headers = new HttpHeaders()
  constructor( private http: HttpClient) {
    this.headers =  this.headers.set('Authorization', localStorage.getItem('token'))
  }


  // public index(): Promise<any> {
  //   return this.http
  //     .get(`${this.apiUrl}/broker`, {headers: {Authorization: 'Bearer '}})
  //     .toPromise()
  //     .then((resposta: any) => resposta.json())
  // }

  public index(): Observable<any>{
    return this.http
      .get(`${this.apiUrl}/broker`, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }
      })
  }


  public create(data: any): Promise<any> {
     return this.http
      .post(`${this.apiUrl}/mailing`, data)
      .toPromise()
      .then((resposta: any) => resposta.json())
      .catch( (err: any) => err.json())
  }

  public show(id: any): Promise<any> {
    return this.http
      .get(`${this.apiUrl}/broker/${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public update(id: any, data: any): Promise<any> {
    return this.http
      .put(`${this.apiUrl}/broker/${id}`, data)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public destroy(id: any): Promise<any> {
    return this.http
      .delete(`${this.apiUrl}/broker/${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

}

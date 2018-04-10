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
  private opions = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}

  public headers = new HttpHeaders()
  constructor( private http: HttpClient) {
    this.headers =  this.headers.set('Authorization', localStorage.getItem('token'))
  }

  public index(): Observable<any>{
    return this.http.get(`${this.apiUrl}/broker`, this.opions)
  }

  public create(data: any): Observable<any> {
     return this.http.post(`${this.apiUrl}/broker`, data, this.opions)
  }

  public show(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/broker/${id}`)
  }

  public showDepartament(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/broker/departament/${id}`)
  }

  public update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/broker/${id}`, data)
  }

  public updateDepartment(id: number, data: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/broker/departament/${id}`, data, this.opions)
  }

  public destroy(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/broker/${id}`)
  }

  public destroyDepartament(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/broker/departament/${id}`)
  }

}

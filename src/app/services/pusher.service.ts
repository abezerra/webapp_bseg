import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import api from '../../environments/api'

@Injectable()
export class PusherService {

  private apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private http: HttpClient){}

  public index(): Observable<any>{
    return this.http.get(`${this.apiUrl}/pushnotifications`, this.options)
  }

  public create(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/liveconversation/push`, data, this.options)
  }

  public show(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/pushnotifications/${id}`, this.options)
  }

  public destroy(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/pushnotifications/${id}`, this.options)
  }


}

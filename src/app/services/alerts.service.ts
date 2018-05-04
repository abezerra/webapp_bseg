import {Injectable} from '@angular/core'
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AlertsService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}
  constructor(private http: HttpClient) { }

  public index(): Observable<any> {
    return this.http.get(`${this.apiUrl}/alerts`, this.options)
  }

  public clients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`, this.options)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/alerts`, data, this.options)
  }

  public show(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/alerts/${id}`, this.options)
  }

  public update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/alerts/${id}`, data, this.options)
  }

  public destroy(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/alerts/${id}`, this.options)
  }
}

import {Injectable} from '@angular/core'
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LeaseService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private http: HttpClient) {
  }

  public clients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`, this.options)
  }

  public index(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lease`, this.options)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/lease`, data, this.options)
  }

  public show(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/lease/${id}`, this.options)
  }

  public update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/lease/${id}`, data, this.options)
  }

  public destroy(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/lease/${id}`, this.options)
  }
}

import {Injectable} from '@angular/core'
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ResidentialService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private http: HttpClient) {
  }

  public clients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients/client`, this.options)
  }

  public index(): Observable<any> {
    return this.http.get(`${this.apiUrl}/residential`, this.options)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/residential`, data, this.options)
  }

  public show(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/residential/${id}`, this.options)
  }

  public update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/residential/${id}`, data, this.options)
  }

  public destroy(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/residential/${id}`, this.options)
  }

}

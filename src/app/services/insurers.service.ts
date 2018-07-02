import { Injectable } from '@angular/core';
import api from '../../environments/api';
import 'rxjs/operator/toPromise';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InsurersService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}
  constructor(private http: HttpClient) { }

  public index(): Observable<any> {
    return this.http.get(`${this.apiUrl}/insurers`, this.options)
  }

  public paginated(page: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/insurers/paginated?page=${page}`, this.options)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insurers`, data, this.options)
  }

  public show(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/insurers/${id}`, this.options)
  }

  public update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/insurers/${id}`, data, this.options)
  }

  public destroy(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/insurers/${id}`, this.options)
  }

}

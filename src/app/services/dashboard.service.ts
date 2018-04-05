import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DashboardService {

  public apiUrl = api.apiUrl;
  private opions = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  public headers = new HttpHeaders()

  constructor(private http: HttpClient) {
    this.headers = this.headers.set('Authorization', localStorage.getItem('token'))
  }


  public listOfInsurances(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard/all`, this.opions)
  }

  public leads(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients/leads`, this.opions)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients`, data, this.opions)
  }

  public show(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients/${id}`, this.opions)
  }

  public update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/${id}`, data, this.opions)
  }

  public destroy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clients/${id}`, this.opions)
  }

}

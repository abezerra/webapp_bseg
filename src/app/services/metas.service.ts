import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MetasService {

  public apiUrl = api.apiUrl;
  private opions = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  public headers = new HttpHeaders()

  constructor(private http: HttpClient) {
    this.headers = this.headers.set('Authorization', localStorage.getItem('token'))
  }

  public index(page: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/metas/paginated?page=${page}`, this.opions)
  }

  public employers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employers`, this.opions)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/metas`, data, this.opions)
  }

  public show(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/metas/${id}`, this.opions)
  }

  public update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/metas/${id}`, data, this.opions)
  }

  public destroy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/metas/${id}`, this.opions)
  }

}

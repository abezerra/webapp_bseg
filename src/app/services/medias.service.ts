import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/operator/toPromise'
import api from '../../environments/api'

@Injectable()
export class MediasService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private http: HttpClient) {}

  public index(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/templatings/defaults`, this.options)

  }

  public create(data): Observable<any> {
    console.log(data)
    return this.http
      .post(`${this.apiUrl}/templatings/defaults`, data, this.options)
  }

  public show(id: any): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/templatings/defaults/${id}`, this.options)
  }

  public update(id: number): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/templatings/defaults/${id}`, this.options)
  }

  public destroy(id: any): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/templatings/defaults/${id}`, this.options)
  }

}

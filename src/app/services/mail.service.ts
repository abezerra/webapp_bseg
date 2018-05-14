import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MailService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private http: HttpClient) {
  }

  public index(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mailer`, this.options)
  }

  public paginated(page: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/mailer/paginated?page=${page}`, this.options)
  }

  public clients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`, this.options)
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/mailer`, data, this.options)
  }

  public show(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/mailer/${id}`, this.options)
  }

  public update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/mailer/${id}`, data, this.options)
  }

  public destroy(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/mailer/${id}`, this.options)
  }

  public user(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`, this.options)
  }

  //templating

  public index_templating(page: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/mailer/templates/paginated?page=${page}`, this.options)
  }

  public create_templating(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/mailer/templates`, data, this.options)
  }

  public destroy_templating(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/mailer/templates/${id}`, this.options)
  }

}

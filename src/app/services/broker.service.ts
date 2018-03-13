import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class BrokerService {

  public apiUrl = api.apiUrl
  constructor(private http: Http) { }

  public fetch(): Promise<any> {
    return this.http
      .get(`${this.apiUrl}/broker`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public create(data: any): Promise<any> {
    return this.http
      .post(`${this.apiUrl}/broker`, data)
      .toPromise()
      .then((resposta: any) => resposta.json())
      .catch( (err: any) => err.json())
  }

  public show(id: any): Promise<any> {
    return this.http
      .get(`${this.apiUrl}/broker/${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public update(id: any, data: any): Promise<any> {
    return this.http
      .put(`${this.apiUrl}/broker/${id}`, data)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public destroy(id: any): Promise<any> {
    return this.http
      .delete(`${this.apiUrl}/broker/${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

}

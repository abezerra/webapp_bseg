import {Injectable} from '@angular/core'
import {Http, RequestOptions} from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class HttpService {
  //
  // private url: string;
  // private options: RequestOptions;
  // public apiUrl = api.apiUrl;
  // private token = localStorage.getItem('token')
  // constructor(private http: Http) {
  // }
  //
  // public getOfertas(): Promise<any> {
  //   return this.http.get('http://localhost:3000/ofertas/?destaque=true')
  //     .toPromise()
  //     .then((resposta: any) => resposta.json())
  // }
  //
  // setAccessToken() {
  //   let header = new Headers({'Authorization': `Bearer ${this.token}`});
  //   this.options.headers = header
  // }
  //
  // public builder(resource: string) {
  //   return this.url = `${this.apiUrl}/${resource}`
  // }
  //
  // public list(options){
  //   return this.http.get(this.url, this.options)
  //                   .toPromise()
  //                   .then( res => res.json() || {})
  // }
}

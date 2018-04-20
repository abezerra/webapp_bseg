import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import api from '../../environments/api';
import {Http} from "@angular/http";
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ChatService {

  public token_id: string
  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}

  constructor(private router: Router, private http: HttpClient) {}

  public onilen_users(): Observable<any>{
    return this.http.get(`${this.apiUrl}/clients`, this.options)
  }

  public find_or_start_conversation(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/liveconversation/client/${id}`, this.options)
  }

  public history_of_conversation(id: number){
    return this.http.get(`${this.apiUrl}/liveconversation/${id}`, this.options)
  }
  public liveconversation(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/liveconversation`, data, this.options)
  }
}

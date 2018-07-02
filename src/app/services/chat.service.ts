import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Router} from '@angular/router'
import 'rxjs/operator/toPromise'
import * as io from  'socket.io-client';
import api from '../../environments/api';



@Injectable()
export class ChatService {

  public token_id: string
  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}
  private socket: SocketIOClient.Socket;

  constructor(private router: Router, private http: HttpClient) {
    this.socket = io('https://api-bseg.brasal.com.br:6001')
  }

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

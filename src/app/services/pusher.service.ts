import { Injectable } from '@angular/core'
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {pusher} from "../../environments/pusher";
declare const Pusher: any;

@Injectable()
export class AlertsService {

  private key =  pusher.key
  public pusher: any;
  public chat_chanel: any;
  constructor() {
    this.pusher = new Pusher(this.key);

    this.chat_chanel =  this.pusher.subscribe('chat_chanel');
  }



}

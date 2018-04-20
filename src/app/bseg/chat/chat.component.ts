import {Component, OnInit, Output, EventEmitter } from '@angular/core';

declare const Pusher: any;
import swal from 'sweetalert2'
import {ChatAdapter} from "ng-chat";
import {DemoAdapter} from "./DemoAdapter";
import {ChatService} from "../../services/chat.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public conversation: any = '';
  @Output() conversationEvent = new EventEmitter<any>()

  public users_online: any;
  public messages: any;
  public user: any;
  public quantity_users_online: number;

  constructor(private _db: ChatService, private _fb: FormBuilder, ) {
  }

  ngOnInit() { this.online_users() }

  public online_users() {
    this._db.onilen_users().subscribe(success => {
      this.users_online = success;
      this.quantity_users_online = this.users_online.length;
    }, error => console.log(error))
  }


  messageForm = this._fb.group({
    message: this._fb.control('',  [Validators.required])
  });

  public startConversation(id: number) {
    this._db.find_or_start_conversation(id).subscribe(
      success => console.log('liveconservation', this.conversation = success),  error => console.warn('Error to find custoemr', error))
  }

  public history_of_conversation(){
    this._db.history_of_conversation(this.conversation.user_id).subscribe()
  }

  public sendMessage(): void {
    let data = {
      message: this.messageForm.value.message,
      receiver_id: this.conversation.user_id,
      sender_id: 11,
      attachment: ''
    }

    this._db.liveconversation(data)
      .subscribe( success => {
        
        this.messageForm.reset();
        this.history_of_conversation()
      }, err => console.log('erro ao enviar mensagem', err))
  }


}

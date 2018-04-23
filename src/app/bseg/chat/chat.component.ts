import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

declare const Pusher: any;
import {ChatService} from "../../services/chat.service";
import {FormBuilder, Validators} from "@angular/forms";

import * as Echo from 'laravel-echo';
import * as io from  'socket.io-client';
import {AuthService} from "../../services/auth.service";
declare var jquery: any;
declare var $: any;

const window = io;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public conversation: any = '';
  public _user: any;
  @Output() conversationEvent = new EventEmitter<any>()
  @ViewChild('scrollme') private scrollContainer: ElementRef;

  public users_online: any;
  public messages: any;
  public user: any;
  public quantity_users_online: number;
  private sound: any;

  constructor(private _db: ChatService, private _fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit() {
        this.serverside()
    this.getAtendentData()
  }

  public scrollToBotton(): void{
    try{
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }catch (error){
      console.log('erro to scroll down', error)
    }
  }

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
      }, err => console.log('erro ao enviar mensagem', err))
  }

  public serverside(){
    Echo = new Echo({
      broadcaster: 'socket.io',
      client: io,
      host: 'http://localhost:6001',
    });

    console.log('Echo', Echo)
    Echo.channel('chat').listen('ChatEvent', e => {
      console.log('evento is', e)
      this.sound = new Audio();
      this.sound.src = 'assets/sounds/new_client_message.mp3';
      this.sound.load();
      let message;
      if(this._user.id === e.user_id.id){
         message = `
            <div class="direct-chat-msg right">
                  <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right">${e.user_id.name}</span>
                    <span class="direct-chat-timestamp pull-left">${e.conversation.created_at}</span>
                  </div>
                  <!-- /.direct-chat-info -->
                  <img class="direct-chat-img" src="assets/img/user2-160x160.jpg" alt="message user image">
                  <!-- /.direct-chat-img -->
                  <div class="direct-chat-text">
                    ${e.conversation.message}
                    <ul >
      
                    </ul>
                  </div>
                  <!-- /.direct-chat-text -->
                </div>
      `
      }else {
        this.sound.play();
        message = `
          <div class="direct-chat-msg">
            <div class="direct-chat-info clearfix">
              <span class="direct-chat-name pull-left">${e.user_id.name}</span>
              <span class="direct-chat-timestamp pull-right">${e.conversation.created_at}</span>
            </div>
            <!-- /.direct-chat-info -->
            <img class="direct-chat-img" src="assets/img/user2-160x160.jpg" alt="message user image">
            <!-- /.direct-chat-img -->
            <div class="direct-chat-text">
                ${e.conversation.message}
            </div>
            <!-- /.direct-chat-text -->
          </div>
        `
      }

      $('#messages').append(message);
    })
  }


  public getAtendentData(){
    this.auth.getAuthenticatedUser().subscribe(success => this._user = success,
        error => console.log('Erro ao buscar dados do usuario lgogado', error))
  }

}

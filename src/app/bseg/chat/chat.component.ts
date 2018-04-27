import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
declare function require(name:string);
declare const Pusher: any;
import {ChatService} from "../../services/chat.service";
import {FormBuilder, Validators} from "@angular/forms";
var Echo = require('laravel-echo');
import * as io from  'socket.io-client';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import swal from 'sweetalert2'
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
  public client: any
  public complete_historic: any

  constructor(
              private _db: ChatService,
              private _fb: FormBuilder,
              private auth: AuthService,
              private _route: ActivatedRoute) {}

  ngOnInit() {
    this.serverside()
    this.getAtendentData()
    this.online_users()
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
      success => {
        this.conversation = undefined
        this.client = success.client[0]
        this.conversation = success.historic_conversation
        this.complete_historic = success.historic_conversation[0].chat_messages
      },  error => console.warn('Error to find custoemr', error))
  }


  public sendMessage(): void {
    let data = {
      message: this.messageForm.value.message,
      client_id: this.client.user_id,
      clerck_id: this._user.id,
      user_id: this._user.id,
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

      console.log('evento bindo do broadcast', e)
      this.sound = new Audio();
      this.sound.src = 'assets/sounds/new_client_message.mp3';
      this.sound.load();
      let message;

      //mostrar se a mensagem foi enviada ou recebida
      if(this._user.id === e.conversation.user_id){
         message = `
            <div class="direct-chat-msg right" *ngIf="${e.conversation.user_id} === ${e.conversation.client_id}">
                  <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right">Brasal Corretora</span>
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

      }else{
        this.sound.play();
        message = `
          <div class="direct-chat-msg">
            <div class="direct-chat-info clearfix">
              <span class="direct-chat-name pull-left">${e.user_id.name} </span>
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

        if(this._route.routeConfig.path !== 'chat'){
          swal({
            position: 'top-end',
            type: 'warning',
            title: 'Uma nova mensagem no chat',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }

      $('#messages').append(message);
      $("#messages").animate({ scrollTop: $("#messages").attr("scrollHeight") - $('#messages').height() }, 3000);

    })


  }


  public getAtendentData(){
    this.auth.getAuthenticatedUser().subscribe(success => this._user = success,
                                            error => console.log('Erro ao buscar dados do usuario lgogado', error))
  }

}

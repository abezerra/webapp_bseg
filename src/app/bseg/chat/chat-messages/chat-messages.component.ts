import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  @Input() conversation: any;
  constructor() { }

  ngOnInit() {}

  receiveConversation($event){
    this.conversation = $event
  }

}

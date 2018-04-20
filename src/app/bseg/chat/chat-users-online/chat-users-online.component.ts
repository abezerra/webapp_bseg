import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-users-online',
  templateUrl: './chat-users-online.component.html',
  styleUrls: ['./chat-users-online.component.css']
})
export class ChatUsersOnlineComponent implements OnInit {

  @Input() user: any
  constructor() { }

  ngOnInit() {}

}

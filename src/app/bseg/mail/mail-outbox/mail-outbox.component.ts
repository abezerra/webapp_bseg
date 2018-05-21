import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-outbox',
  templateUrl: './mail-outbox.component.html',
  styleUrls: ['./mail-outbox.component.css']
})
export class MailOutboxComponent implements OnInit {

public mails: any;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-outbox',
  templateUrl: './sms-outbox.component.html',
  styleUrls: ['./sms-outbox.component.css']
})
export class SmsOutboxComponent implements OnInit {

public mails: any;
  constructor() { }

  ngOnInit() {
  }

}

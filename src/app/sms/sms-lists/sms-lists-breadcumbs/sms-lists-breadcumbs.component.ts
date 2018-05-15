import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-lists-breadcumbs',
  templateUrl: './sms-lists-breadcumbs.component.html',
  styleUrls: ['./sms-lists-breadcumbs.component.css']
})
export class SmsListsBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Crie listas de distribuição de SMS';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-templates-breadcumbs',
  templateUrl: './sms-templates-breadcumbs.component.html',
  styleUrls: ['./sms-templates-breadcumbs.component.css']
})
export class SmsTemplatesBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Crie mensagens que podem ser reutilizadas';
  constructor() { }

  ngOnInit() {
  }

}

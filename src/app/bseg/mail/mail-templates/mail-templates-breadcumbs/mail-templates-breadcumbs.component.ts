import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-templates-breadcumbs',
  templateUrl: './mail-templates-breadcumbs.component.html',
  styleUrls: ['./mail-templates-breadcumbs.component.css']
})
export class MailTemplatesBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Crie templates de e-mail para enviar para clientes';
  constructor() { }

  ngOnInit() {
  }

}

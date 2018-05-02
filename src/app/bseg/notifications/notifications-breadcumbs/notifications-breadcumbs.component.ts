import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-breadcumbs',
  templateUrl: './notifications-breadcumbs.component.html',
  styleUrls: ['./notifications-breadcumbs.component.css']
})
export class NotificationsBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Envie notificações para clientes';
  constructor() { }

  ngOnInit() {
  }

}

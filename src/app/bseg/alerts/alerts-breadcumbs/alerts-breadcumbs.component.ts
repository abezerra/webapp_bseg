import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-breadcumbs',
  templateUrl: './alerts-breadcumbs.component.html',
  styleUrls: ['./alerts-breadcumbs.component.css']
})
export class AlertsBreadcumbsComponent implements OnInit {

  public pagedescription = 'Alertas enviados aos clientes';
  constructor() { }

  ngOnInit() {
  }

}

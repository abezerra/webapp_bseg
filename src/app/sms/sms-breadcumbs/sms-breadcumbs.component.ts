import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-breadcumbs',
  templateUrl: './sms-breadcumbs.component.html',
  styleUrls: ['./sms-breadcumbs.component.css']
})
export class SmsBreadcumbsComponent implements OnInit {

  public pagedescription: string = '';
  constructor() { }

  ngOnInit() {
  }

}

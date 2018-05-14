import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-breadcumbs',
  templateUrl: './mail-breadcumbs.component.html',
  styleUrls: ['./mail-breadcumbs.component.css']
})
export class MailBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'E-mail marketing';
  constructor() { }

  ngOnInit() {
  }

}

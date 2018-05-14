import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-lists-breadcumbs',
  templateUrl: './mail-lists-breadcumbs.component.html',
  styleUrls: ['./mail-lists-breadcumbs.component.css']
})
export class MailListsBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Crie listas de emails'
  constructor() { }

  ngOnInit() {
  }

}

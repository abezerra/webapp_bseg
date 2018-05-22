import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas-breadcumbs',
  templateUrl: './metas-breadcumbs.component.html',
  styleUrls: ['./metas-breadcumbs.component.css']
})
export class MetasBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Metas da equipe de corretores';
  constructor() { }

  ngOnInit() {
  }

}

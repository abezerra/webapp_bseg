import { Component, OnInit } from '@angular/core';
import {MailService} from "../../../../services/mail.service";

@Component({
  selector: 'app-mail-templates-list',
  templateUrl: './mail-templates-list.component.html',
  styleUrls: ['./mail-templates-list.component.css']
})
export class MailTemplatesListComponent implements OnInit {

  public templates: any;
  public page: any;
  public current_page: number;
  public last_page: number;
  public total: number;
  public per_page: number;
  constructor(private _db: MailService) { }

  ngOnInit() {
    this.index(1)
  }

  public index(page: any){
    this._db.index_templating(page).subscribe(success => {
      this.templates = success.data;
      this.current_page = success.current_page;
      this.last_page = success.last_page;
      this.per_page = success.per_page;
      this.total = success.total;
    }, error => error)
  }

  public pageChanged(pageNumber: any) {
    this.current_page = pageNumber
    this.index(pageNumber);
  }

}

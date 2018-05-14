import { Component, OnInit } from '@angular/core';
import {MailService} from "../../../services/mail.service";

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html',
  styleUrls: ['./mail-inbox.component.css']
})
export class MailInboxComponent implements OnInit {

  public mails: any;
  public current_page: number;
  public last_page: number;
  public total: number;
  public per_page: number;
  constructor(private _db: MailService) { }

  ngOnInit() {
    this.index(1);
  }

  public index(page: any) {
    this._db.paginated(page).subscribe(success => {
      this.mails = success.data;
      this.current_page = success.current_page;
      this.last_page = success.last_page;
      this.per_page = success.per_page;
      this.total = success.total;
    }, error => console.log('error', error))
  }

  public pageChanged(pageNumber: any) {
    this.current_page = pageNumber
    this.index(pageNumber);
  }
}

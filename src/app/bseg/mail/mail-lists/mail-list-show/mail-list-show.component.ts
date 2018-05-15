import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MailService} from "../../../../services/mail.service";

@Component({
  selector: 'app-mail-list-show',
  templateUrl: './mail-list-show.component.html',
  styleUrls: ['./mail-list-show.component.css']
})
export class MailListShowComponent implements OnInit {

  public list: any;
  public participant: any;
  public client: any;
  public user: any;

  constructor(private _db: MailService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.show(this._route.snapshot.params['id'])
  }

  public show(id: number) {
    this._db.show(id)
      .subscribe(success => {
          this.participant = success
          this.list = success.listy,
          console.log(this.client = success.client),
          this.user = success.users

        },
        error => console.error('Error to find auto insurance', error))
  }

}

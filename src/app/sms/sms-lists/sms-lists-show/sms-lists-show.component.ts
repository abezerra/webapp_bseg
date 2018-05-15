import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SmsService} from "../../../services/sms.service";

@Component({
  selector: 'app-sms-lists-show',
  templateUrl: './sms-lists-show.component.html',
  styleUrls: ['./sms-lists-show.component.css']
})
export class SmsListsShowComponent implements OnInit {

  public list: any;
  public participant: any;
  public client: any;
  public user: any;

  constructor(private _db: SmsService,
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

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LeaseService} from "../../../../services/lease.service";

@Component({
  selector: 'app-lease-show',
  templateUrl: './lease-show.component.html',
  styleUrls: ['./lease-show.component.css']
})
export class LeaseShowComponent implements OnInit {

  public lease: any;
  public client: any;
  public coverage: any;

  constructor(private _db: LeaseService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.show(this._route.snapshot.params['id'])
  }

  public show(id: number) {
    this._db.show(id)
      .subscribe(success => {
          this.lease = success
          this.client = success.client
          this.coverage = success.coverage
        },
        error => console.error('Error to find auto insurance', error))
  }
}

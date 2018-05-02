import { Component, OnInit } from '@angular/core';
import {PusherService} from "../../../services/pusher.service";

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

  public pushs: any;
  constructor(private _db: PusherService) { }

  ngOnInit() {
    this.index();
  }

  public index(){
    this._db.index().subscribe(success => this.pushs = success, error => error)
  }
}

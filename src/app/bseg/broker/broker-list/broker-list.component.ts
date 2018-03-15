import { Component, OnInit } from '@angular/core';
import {BrokerService} from "../../../services/broker.service";

@Component({
  selector: 'app-broker-list',
  templateUrl: './broker-list.component.html',
  styleUrls: ['./broker-list.component.css']
})
export class BrokerListComponent implements OnInit {

  public broker: any;
  constructor(private _db: BrokerService) { }

  ngOnInit() { this.getAll() }


  public getAll(): void {
    this._db
      .index()
      .then(res => this.broker = res)
      .catch( err => console.error('Insurances not found', err))
  }

}

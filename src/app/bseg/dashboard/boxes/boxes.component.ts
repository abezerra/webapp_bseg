import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  public renew: any;
  public expired: any;
  constructor(private _db: DashboardService) { }

  ngOnInit() {
    this.boxesNumericalInformations()
  }

  public boxesNumericalInformations(){
    this._db.renre_and_expired().subscribe( success => {
      this.renew = success.renew;
      this.expired = success.insurances_expired;
    }, error => {
      console.error('No informations to display', error)
    })
  }

}

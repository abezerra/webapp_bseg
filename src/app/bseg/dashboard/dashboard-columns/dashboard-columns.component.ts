import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";

@Component({
  selector: 'app-dashboard-columns',
  templateUrl: './dashboard-columns.component.html',
  styleUrls: ['./dashboard-columns.component.css']
})
export class DashboardColumnsComponent implements OnInit {

  public total: any;
  public total_auto: any;
  public total_eo: any;
  public total_life: any;
  public total_lease: any;
  public total_residential: any;
  constructor(private _db: DashboardService) { }

  ngOnInit() {
    this.getInformationsToSidebars()
  }

  public getInformationsToSidebars(){
    this._db.total_hired().subscribe(success => {
      this.total = success.total_insurances_registered;
      this.total_auto =  success.auto;
      this.total_eo =  success.eo;
      this.total_life =  success.life;
      this.total_lease =  success.lease;
      this.total_residential =  success.residential;
    }, error => console.error('No informations to display', error))
  }

}

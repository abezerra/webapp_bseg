import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-dashboard-list-',
  templateUrl: './dashboard-list-.component.html',
  styleUrls: ['./dashboard-list-.component.css']
})
export class DashboardListComponent implements OnInit {

  public auto: any;
  public eo: any;
  public life: any;
  public lease: any;
  public residential: any;

  constructor(private _db: DashboardService) { }

  ngOnInit() {
    this.insurances()
  }

  public insurances(){
    console.warn('Me rrodou')
    this._db.listOfInsurances().subscribe(success => {
      this.auto =  success.auto;
      this.eo = success.eo;
      this.life = success.life;
      this.lease = success.lease;
      this.residential = success.residential;
    }, error => {
      console.error('No available informations of insurances')
    })
  }

}

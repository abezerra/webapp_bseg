import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
export class DashboardChartsComponent implements OnInit {

  public weekli: any;
  public dp: Array<any>;
  constructor(private _db: DashboardService) { }

  ngOnInit() {
    this.index()
    setTimeout(() => {
      this.weekli.map( w => {
        this.dp = [{w: w.production_meta, y: w.production_meta, z: w.description}]
      })

      console.log('a porra do dp', this.dp)
    }, 2000)
  }

  public index(): void {
    this._db.weekly_ranking().subscribe(
      success => this.weekli = success,
            error => console.log(error)
    )
  }

  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {
      title: 'Metas diarias',
      slices: {
        0: {
          offset: 0.3
        },
        1: {
          offset: 0.2
        }
      }
    }
  };

  timelineChartData =  {
    chartType: 'Timeline',
    dataTable: [

      ['Name', 'From', 'To'],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ],
    option: {
      title: 'Ranking de metas semanais'
    }
  }
}

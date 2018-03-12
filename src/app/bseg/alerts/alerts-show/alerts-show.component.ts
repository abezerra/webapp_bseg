import { Component, OnInit, Input } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-alerts-show',
  templateUrl: './alerts-show.component.html',
  styleUrls: ['./alerts-show.component.css']
})
export class AlertsShowComponent implements OnInit {

  @Input() public palert: any

  constructor() { 
    console.log('álert', this.palert);
    
  }

  ngOnInit() {}

  public toUpdate(key: any): void{
    $('#show').modal('hide')
    console.log('update apolice', key);
  }

}

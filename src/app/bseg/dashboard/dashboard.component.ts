import { Component, OnInit } from '@angular/core';
import user from '../../../environments/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log('user da variavel', user)
  }

}

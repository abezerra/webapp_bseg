import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css']
})
export class ProfileAboutComponent implements OnInit {

  @Input() public user: any;
  constructor() { }

  ngOnInit() {
  }

}

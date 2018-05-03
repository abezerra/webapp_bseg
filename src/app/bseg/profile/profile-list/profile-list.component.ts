import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input() public user: any;
  constructor() { }

  ngOnInit() {
  }

}

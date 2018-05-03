import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-profile-numbers',
  templateUrl: './profile-numbers.component.html',
  styleUrls: ['./profile-numbers.component.css']
})
export class ProfileNumbersComponent implements OnInit {

  public user: any;
  constructor(private _db: AuthService) { }

  ngOnInit() {
    this._user();
  }

  public _user(){
    this._db.user().subscribe(success => {
      this.user = success
    }, error => console.log('error', error))
  }
}

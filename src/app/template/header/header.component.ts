import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import user from '../../../environments/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  public _signout(){
    this._db.signout()
  }

}

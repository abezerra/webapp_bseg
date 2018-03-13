import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  constructor(private db: AuthService) { }

  ngOnInit() {
    this.clients()
  }

  public clients(){
    this.db.fetch()
      .then( res => console.log('res oatuh client', res))
      .catch(err => console.log('erro', err))
  };
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, Validators} from "@angular/forms";
import swal from 'sweetalert2'
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  constructor(private db: AuthService,
              private _fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {

  }

  authForm = this._fb.group({
    email: this._fb.control('', [Validators.required, Validators.email]),
    password: this._fb.control('', [Validators.required]),
  })

  public signin(): void {
    let data = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
      grant_type: 'password',
      client_id: '1',
      client_secret: 'c3cEQ9L7leTV4vnRbN8ehMmhjUdaSiGbys7xEn53',
      scope: ''
    }
    this.db.signin(data)
      .subscribe(data => {
        localStorage.setItem('token', data.success.token)
        this.router.navigate(['/dashboard'])
      }, err => console.log('error to login', err))
  }

}

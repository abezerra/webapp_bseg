import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, Validators} from "@angular/forms";
import swal from 'sweetalert2'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  constructor(private db: AuthService, private _fb: FormBuilder) {
  }

  ngOnInit() {

  }

  authForm = this._fb.group({
    email: this._fb.control('', [Validators.required, Validators.email]),
    password: this._fb.control('', [Validators.required]),
  })

  public signin(): void {
    this.db.signin(this.authForm.value.email, this.authForm.value.password)
      .then(res => {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Bem vindo ao BSeg',
          showConfirmButton: false,
          timer: 900
        })
      })
      .catch(err => {
        swal({
          position: 'top-end',
          type: 'error',
          title: 'Credenciais invalidas',
          showConfirmButton: false,
          timer: 900
        })
      })
  }
}

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
  }

}

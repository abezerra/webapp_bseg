import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
declare var jquery: any;
declare var $: any;
import swal from "sweetalert2";
import {CURRENT_OPTIONS_CONFIG} from "../../bseg/mail/mail-compose/ng-selectize.config";
import {SmsService} from "../../services/sms.service";


@Component({
  selector: 'app-sms-compose',
  templateUrl: './sms-compose.component.html',
  styleUrls: ['./sms-compose.component.css']
})
export class SmsComposeComponent implements OnInit {

  public user: any;
  public clients: any;
  public config: any = CURRENT_OPTIONS_CONFIG;
  public lists: any;
  constructor(private _db: SmsService, private _fb: FormBuilder) { }

  ngOnInit() {
    this._user();
    this._clients();
    this._list();
  }

  public _user() {
    this._db.user().subscribe(success => this.user = success, error => error)
  }

  public _list() {
    this._db.lists().subscribe(success => this.lists = success, error => error)
  }

  public _clients() {
    this._db.clients().subscribe(success => this.clients = success, error => error)
  }

  newSms = this._fb.group({
    to: this._fb.control('', [Validators.required]),
    content: this._fb.control('', [Validators.required]),
  });

  public create() {
    let data = {
      to: this.newSms.value.to,
      content: this.newSms.value.content,
      sender_email: localStorage.getItem('email'),
      sender_name: localStorage.getItem('name'),
      user_id: localStorage.getItem('user_id')
    }
    this._db.create(data).subscribe(success => {
        swal(
          'Sucesso',
          'E-mail enviado com sucesso',
          'success'
        );
        this.newSms.reset();
        $('#newSms').modal('hide');
      }, error => {
        swal(
          'Error',
          'Erro ao enviar email',
          'error'
        );
      }
    );
  }

}

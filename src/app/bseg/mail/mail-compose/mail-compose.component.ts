import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import 'rxjs';
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2';
import {CURRENT_OPTIONS_CONFIG} from './ng-selectize.config';
import {MailService} from "../../../services/mail.service";

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css']
})
export class MailComposeComponent implements OnInit {

  public user: any;
  public clients: any;
  public config: any = CURRENT_OPTIONS_CONFIG;
  public lists: any;
  constructor(private _db: MailService, private _fb: FormBuilder) { }

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

  newMail = this._fb.group({
    to: this._fb.control('', [Validators.required]),
    subject: this._fb.control('', ),
    content: this._fb.control('', [Validators.required]),
    attachment: this._fb.control('', ),
  });

  public create() {
    let data = {
      to: this.newMail.value.to,
      subject: this.newMail.value.subject,
      content: this.newMail.value.content,
      attachment: this.newMail.value.attachment,
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
        this.newMail.reset();
        $('#newMail').modal('hide');
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

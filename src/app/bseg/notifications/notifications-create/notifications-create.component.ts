import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {PusherService} from "../../../services/pusher.service";
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-notifications-create',
  templateUrl: './notifications-create.component.html',
  styleUrls: ['./notifications-create.component.css']
})
export class NotificationsCreateComponent implements OnInit {

  public _user: any;
  constructor(private _fb: FormBuilder,
              private _db: PusherService,
              private _auth: AuthService) { }

  public getAtendentData(){
    this._auth.getAuthenticatedUser().subscribe(success => this._user = success,
      error => console.log(error))
  }

  ngOnInit() {
    this.getAtendentData()
  }

  newPushNotification = this._fb.group({
    message: this._fb.control('', [Validators.required]),
    heading: this._fb.control('', [Validators.required]),
    subtitle: this._fb.control('', [Validators.required])
  });

  public create(){
    let data = {
      message: this.newPushNotification.value.message,
      heading: this.newPushNotification.value.heading,
      subtitle: this.newPushNotification.value.subtitle,
      sended_by: this._user.id,
    }
    this._db.create(data).subscribe(
      success => {
        swal(
          'Sucesso',
          'Notificações enviadas com sucesso',
          'success'
        );
        this.newPushNotification.reset();
        $('#newPushNotification').modal('hide')
    },
      error => {
        swal(
          'Erro',
          'Erro ao enviar notificação',
          'error'
        );
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery:any;
declare var $ :any;
import swal from 'sweetalert2'

import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-alerts-form',
  templateUrl: './alerts-form.component.html',
  styleUrls: ['./alerts-form.component.css']
})
export class AlertsFormComponent implements OnInit {

  constructor(private _fb: FormBuilder, private db: AlertsService) { }

  ngOnInit() {
  }

  formAddAlert =  this._fb.group({
    title: this._fb.control('', [Validators.required]),
    content: this._fb.control('', [Validators.required]),
    status: this._fb.control('', [Validators.required]),
    user_id: this._fb.control('', [Validators.required])
  });

  public create(){
    this.db
        .create(this.formAddAlert.value)
        .then( res => {
          swal(
            'Sucesso',
            'Alerta enviado com sucesso',
            'success'
          );
          $('#modal-add-alert').modal('hide') 
        })
        .catch( err => {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Houve um erro ao enviar o alert!',
            footer: err,
          })
        })
  }

}

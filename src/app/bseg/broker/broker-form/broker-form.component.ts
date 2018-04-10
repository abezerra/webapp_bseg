import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'
import {BrokerService} from "../../../services/broker.service";
import {Data} from "@angular/router";

@Component({
  selector: 'app-broker-form',
  templateUrl: './broker-form.component.html',
  styleUrls: ['./broker-form.component.css']
})
export class BrokerFormComponent implements OnInit {

  public brokers: any;
  public logo: any;
  constructor(private _fb: FormBuilder,
              private _db: BrokerService) { }

  ngOnInit() {}

  public prepareFileToUpload(event): void {
    this.logo = (<HTMLInputElement>event.target).files
  }

  formAddBroker = this._fb.group({
    image: this._fb.control('',),
    name: this._fb.control('',[Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    description: this._fb.control('',[Validators.required]),
    slogan: this._fb.control('',),
    ddd: this._fb.control('',[Validators.required, Validators.maxLength(3), Validators.minLength(2)]),
    cellphone: this._fb.control('',),
    telephone: this._fb.control('',[Validators.required, Validators.maxLength(9), Validators.minLength(8)]),
    email: this._fb.control('',[Validators.required, Validators.email]),
    site: this._fb.control('',[Validators.required]),
    cep: this._fb.control('',[Validators.required]),
    ibge_code: this._fb.control('',),
    address: this._fb.control('',[Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
    neighborhood: this._fb.control('',[Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    complement: this._fb.control('',),
    city: this._fb.control('',[Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    uf: this._fb.control('',[Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
    departamentArray: this._fb.array([]),
  });

  addDepartaments() {
    let co = this.formAddBroker.get('departamentArray') as FormArray;
    co.push(this.createDepartamentsInputs())
  }

  createDepartamentsInputs(): FormGroup {
    return this._fb.group({
      coverage: this._fb.control('', ),
      description: this._fb.control('', ),
      telephone: this._fb.control('', ),
      email: this._fb.control('', [Validators.email]),
      whatsapp: this._fb.control('', ),
    })
  }

  public create() {
    this._db
      .create(this.formAddBroker.value)
      .subscribe( data => {
        swal(
          'Sucesso',
          'Corretora cadastrada com sucesso',
          'success'
        );
        $('#modal-add-broker').modal('hide')
      }, error => {
        swal(
          'ERRO',
          'Houve um erro ao cadastrar a corretora',
          'error'
        );
      })
  }

  get formData() {
    return <FormArray>this.formAddBroker.get('departamentArray');
  }
}

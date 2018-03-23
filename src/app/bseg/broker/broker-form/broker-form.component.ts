import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'
import {BrokerService} from "../../../services/broker.service";

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
    name: this._fb.control('',[Validators.required]),
    description: this._fb.control('',[Validators.required]),
    slogan: this._fb.control('',),
    ddd: this._fb.control('',[Validators.required]),
    cellphone: this._fb.control('',),
    telephone: this._fb.control('',[Validators.required]),
    email: this._fb.control('',[Validators.required]),
    site: this._fb.control('',[Validators.required]),
    cep: this._fb.control('',[Validators.required]),
    ibge_code: this._fb.control('',),
    address: this._fb.control('',[Validators.required]),
    neighborhood: this._fb.control('',[Validators.required]),
    complement: this._fb.control('',),
    city: this._fb.control('',[Validators.required]),
    uf: this._fb.control('',[Validators.required]),
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
      email: this._fb.control('', ),
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
}

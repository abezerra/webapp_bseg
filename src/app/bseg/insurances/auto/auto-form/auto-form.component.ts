import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms'
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'
import 'rxjs'

declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'

import {AutoService} from '../../../../services/auto.service';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent implements OnInit {

  private autoApoliceFile: any;
  public clients: any;

  constructor(private db: AutoService,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.getClients()
  }

  public getClients(): void {
    this.db
      .clients()
      .subscribe(data => this.clients = data, error => console.log('error to get clients'))
  }

  public prepareFileToUpload(event): void {
    this.autoApoliceFile = (<HTMLInputElement>event.target).files
  }

  formAddCarInsurance = this._fb.group({
    insurer: this._fb.control('', [Validators.required]),
    apoliceNumber: this._fb.control('', [Validators.required]),
    validity: this._fb.control('', [Validators.required]),
    classification: this._fb.control('', [Validators.required]),
    accession: this._fb.control('', [Validators.required]),
    input: this._fb.control('', []),
    value: this._fb.control('', []),
    totalOfPortions: this._fb.control('', []),
    paymentForm: this._fb.control('', []),
    portion: this._fb.control('', []),
    date: this._fb.control('', []),
    portionValue: this._fb.control('', []),
    cpf: this._fb.control('', [Validators.required]),
    name: this._fb.control('', [Validators.required, Validators.minLength(3)]),
    email: this._fb.control('', [Validators.required]),
    birth: this._fb.control('', [Validators.required]),
    veichle: this._fb.control('', [Validators.required]),
    board: this._fb.control('', [Validators.required]),
    yearOfManufacture: this._fb.control('', [Validators.required]),
    yearOfModel: this._fb.control('', [Validators.required]),
    coverageArray: this._fb.array([]),
  });

  addCoverage() {
    let co = this.formAddCarInsurance.get('coverageArray') as FormArray;
    co.push(this.createCoverageInputs())
  }

  createCoverageInputs(): FormGroup {
    return this._fb.group({
      coverage: this._fb.control('', [Validators.required]),
      value: this._fb.control('', [Validators.required]),
      franchise: this._fb.control('', [Validators.required]),
    })
  }

  public create() {
    this.db.create(this.formAddCarInsurance.value)
      .subscribe(data => {
        swal(
          'Sucesso',
          'Seguro auto cadastrado com sucesso',
          'success'
        );
        $('#modal-add-auto-insurance').modal('hide')
      }, error => {
        swal(
          'Erro',
          'Erro ao cadastrar seguro',
          'success'
        );
      })

  }


  get formData() {
    return <FormArray>this.formAddCarInsurance.get('coverageArray');
  }
}

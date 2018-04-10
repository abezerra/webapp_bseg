import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

//rxjs
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'

declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'

import { LifeService } from '../../../../services/life.service';

@Component({
  selector: 'app-life-form',
  templateUrl: './life-form.component.html',
  styleUrls: ['./life-form.component.css']
})
export class LifeFormComponent implements OnInit {

  private individualLifePolicyFile: any;
  constructor(
    private db: LifeService,
    private _fb: FormBuilder) { }

  ngOnInit() { }

  public prepareFileToUpload(event): void {
    this.individualLifePolicyFile = (<HTMLInputElement>event.target).files
  }

  formAddIndividualLifeInsurance = this._fb.group({
    insurer: this._fb.control('', [Validators.required]),
    apoliceNumber: this._fb.control('', [Validators.required]),
    validity: this._fb.control('', [Validators.required]),
    accession: this._fb.control('', [Validators.required]),
    classification: this._fb.control('', [Validators.required]),
    input: this._fb.control('', ),
    value: this._fb.control('', ),
    totalOfPortions: this._fb.control('', ),
    paymentForm: this._fb.control('', ),
    portion: this._fb.control('', ),
    date: this._fb.control('', ),
    portionValue: this._fb.control('', ),
    cpf: this._fb.control('', [Validators.required]),
    name: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required]),
    birth: this._fb.control('', [Validators.required]),
    coverageArray: this._fb.array([]),
  });

  addCoverageOfIndividualLifeInsurer() {
    let co = this.formAddIndividualLifeInsurance.get('coverageArray') as FormArray;
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
    this.db
      .create(this.formAddIndividualLifeInsurance.value)
      .subscribe(success => {
        swal(
          'Sucesso',
          'Seguro cadastrado com sucesso',
          'success'
        );
        $('#modal-add-individual-life').modal('hide')
      }, error => {
        swal(
          'ERRO',
          'Erro ao cadastrar seguro',
          'error'
        );
      })
  }

  get formData() {
    return <FormArray>this.formAddIndividualLifeInsurance.get('coverageArray');
  }

}

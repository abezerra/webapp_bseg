import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

//rxjs
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'
import { LeaseService } from '../../../../services/lease.service';

@Component({
  selector: 'app-lease-form',
  templateUrl: './lease-form.component.html',
  styleUrls: ['./lease-form.component.css']
})
export class LeaseFormComponent implements OnInit {



  private leaseBoundFile: any;

  constructor(
    private db: LeaseService,
    private _fb: FormBuilder) { }

  ngOnInit() { }

  public prepareFileToUpload(event): void {
    this.leaseBoundFile = (<HTMLInputElement>event.target).files
  }

  formAddLeaseBoundInsurance = this._fb.group({
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
    localeOfRisc: this._fb.control('', [Validators.required]),
    administrator: this._fb.control('', [Validators.required]),
    duartion: this._fb.control('', [Validators.required]),
    coverageArray: this._fb.array([]),
  });

  addCoverageOfLeaseBoundInsurance() {
    let co = this.formAddLeaseBoundInsurance.get('coverageArray') as FormArray;
    co.push(this.createCoverageInputs())
  }

  createCoverageInputs(): FormGroup {
    return this._fb.group({
      coverage: this._fb.control('', ),
      value: this._fb.control('', ),
      franchise: this._fb.control('', ),
    })
  }

  public create() {
    this.db
      .create(this.formAddLeaseBoundInsurance.value)
      .subscribe(success => {
        swal(
          'Sucesso',
          'Seguro cadastrado com sucesso',
          'success'
        );
        $('#modal-add-lease-bound').modal('hide')
      }, error => {
        swal(
          'ERRO',
          'Erro ao cafastrar seguro',
          'error'
        );
      })

  }

  get formData() {
    return <FormArray>this.formAddLeaseBoundInsurance.get('coverageArray');
  }

}

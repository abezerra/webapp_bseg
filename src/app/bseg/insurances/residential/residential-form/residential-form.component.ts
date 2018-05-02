import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

//rxjs
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'
import { ResidentialService } from '../../../../services/residential.service';

@Component({
  selector: 'app-residential-form',
  templateUrl: './residential-form.component.html',
  styleUrls: ['./residential-form.component.css']
})
export class ResidentialFormComponent implements OnInit {

  private residentialApoliceFile: any;

  constructor(
    private db: ResidentialService,
    private _fb: FormBuilder) { }

  ngOnInit() { }

  public preapreFileToUpload(event): void {
    this.residentialApoliceFile = (<HTMLInputElement>event.target).files
  }

  formAddResidentialInsurer = this._fb.group({
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
    city: this._fb.control('', [Validators.required]),
    neigbrhood: this._fb.control('', [Validators.required]),
    cep: this._fb.control('', [Validators.required]),
    coverageArray: this._fb.array([]),
  });

  addCoverageOfResidentialInsurer() {
    let co = this.formAddResidentialInsurer.get('coverageArray') as FormArray;
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
      .create(this.formAddResidentialInsurer.value)
      .subscribe(success => { swal(
          'Sucesso',
          'Seguro cadastrado com sucesso',
          'success'
        );
        $('#modal-add-residential').modal('hide')
      }, error => {
        swal(
          'ERRO',
          'Erro ao cadastrar seguro',
          'error'
        );
      })
  }

  get formData() {
    return <FormArray>this.formAddResidentialInsurer.get('coverageArray');
  }
}

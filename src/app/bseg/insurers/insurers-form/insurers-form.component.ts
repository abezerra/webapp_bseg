import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

//rxjs
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'

import { InsurersService } from '../../../services/insurers.service';

@Component({
  selector: 'app-insurers-form',
  templateUrl: './insurers-form.component.html',
  styleUrls: ['./insurers-form.component.css']
})
export class InsurersFormComponent implements OnInit {

  
  private eoFile: any
  constructor(private db: InsurersService, private _fb: FormBuilder) { }

  ngOnInit() {
  }

  public prepareFileToUpload(event): void {
    this.eoFile = (<HTMLInputElement>event.target).files
  }

  formAddInsurers = this._fb.group({
    name: this._fb.control('', [Validators.required]),
    site: this._fb.control('', [Validators.required]),
    cnpj: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required]),
  })

  public create() {
    this.db
      .create(this.formAddInsurers.value)
      .then(res => {
        swal(
          'Sucesso',
          'Seguradora cadastrado com sucesso',
          'success'
        )
        $('#modal-add-insurers').modal('hide')
      })

  }
}

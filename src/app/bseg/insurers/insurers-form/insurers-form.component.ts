import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms'
import {ToastrService} from 'ngx-toastr';

declare var jquery: any;
declare var $: any;
//rxjs
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'
import 'rxjs'
import {InsurersService} from '../../../services/insurers.service';

@Component({
  selector: 'app-insurers-form',
  templateUrl: './insurers-form.component.html',
  styleUrls: ['./insurers-form.component.css']
})
export class InsurersFormComponent implements OnInit {


  private eoFile: any;

  constructor(private db: InsurersService,
              private _fb: FormBuilder,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.inputmask()
  }

  public prepareFileToUpload(event): void {
    this.eoFile = (<HTMLInputElement>event.target).files
  }

  formAddInsurers = this._fb.group({
    name: this._fb.control('', [Validators.required]),
    site: this._fb.control('', [Validators.required]),
    cnpj: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required]),
  });

  public create() {
    this.db
      .create(this.formAddInsurers.value).subscribe(
      success => {
        $('#modal-add-insurers').modal('hide')
        this.toastr.success('Seguradora criada com sucesso', 'Sucesso!', {
          timeOut: 3000,
          progressAnimation: "decreasing",
          progressBar: true,
        });
      },
      error => {
        this.toastr.error('Erro ao criar seguradora', 'Error!', {
          timeOut: 3000,
          progressAnimation: "decreasing",
          progressBar: true,
        });
      }
    )
  }


  public inputmask() {
    $(document).ready(function() {
      $('#cnpj').mask('00.000.000/0000-00');
    });
  }
}

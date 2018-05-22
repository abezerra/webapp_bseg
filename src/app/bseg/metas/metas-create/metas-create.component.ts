import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms'
import 'rxjs';
import {MetasService} from "../../../services/metas.service";
declare var jquery: any;
declare var $: any;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-metas-create',
  templateUrl: './metas-create.component.html',
  styleUrls: ['./metas-create.component.css']
})
export class MetasCreateComponent implements OnInit {

  public emp: any;
  constructor(private _db: MetasService,
              private _fb: FormBuilder,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.employers();
    this.inputmask();
  }

  public employers(): void {
    this._db.employers().subscribe(success => this.emp = success, error => error)
  }

  newMeta = this._fb.group({
    description: this._fb.control('', []),
    production_meta: this._fb.control('', [Validators.required]),
    production_real: this._fb.control('', []),
    rate_profit_meta: this._fb.control('', [Validators.required]),
    rate_profit_real: this._fb.control('', []),
    app_downloads_number_meta: this._fb.control('', [Validators.required]),
    app_downloads_number_real: this._fb.control('', []),
    news_contracts_meta: this._fb.control('', [Validators.required]),
    news_contracts_real: this._fb.control('', []),
    percentage_of_renovations_meta: this._fb.control('', [Validators.required]),
    percentage_of_renovations_real: this._fb.control('', []),
    percentage_of_insurances_versus_news_meta: this._fb.control('', [Validators.required]),
    percentage_of_insurances_versus_news_real: this._fb.control('', []),
    employer_id: this._fb.control('', [Validators.required]),
  });

  public create(): void {
    console.log(this.newMeta.value)
    this._db.create(this.newMeta.value).subscribe(
      success => {
        this.toastr.success('Meta cadastrada com sucesso', 'Sucesso!')
        $('#newMeta').modal('hide')
        this.newMeta.reset()
      },
      error => this.toastr.error('Erro ao cadastrar meta', 'Erro'))
  }

  public inputmask() {
    $(document).ready(function() {
      $('#rate_profit_meta').mask('#0%');
      $('#rate_profit_real').mask('#0%');
      $('#percentage_of_renovations_meta').mask('#0%');
      $('#percentage_of_renovations_real').mask('#0%');
    });
  }
}

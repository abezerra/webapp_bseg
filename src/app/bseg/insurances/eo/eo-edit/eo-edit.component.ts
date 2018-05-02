import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import swal from "sweetalert2";
import {EOService} from "../../../../services/eo.service";

@Component({
  selector: 'app-eo-edit',
  templateUrl: './eo-edit.component.html',
  styleUrls: ['./eo-edit.component.css']
})
export class EoEditComponent implements OnInit {

  public eo: any;
  constructor(
    private _db: EOService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getInsurance(this._route.snapshot.params['id']);
    setTimeout(() => {
      this.updateEOForm.setValue({
        insurer: this.eo.insurer,
        apoliceNumber: this.eo.apoliceNumber,
        validity: this.eo.validity,
        accession: this.eo.classification,
        classification: this.eo.created_at,
        input: this.eo.input,
        value: this.eo.value,
        totalOfPortions: this.eo.totalOfPortions,
        paymentForm: this.eo.paymentForm,
        portion: this.eo.portion,
        date: this.eo.date,
        portionValue: this.eo.portionValue,
        cpf: this.eo.cpf,
        taker: this.eo.taker,
        cnpj: this.eo.cnpj,
      })
    }, 999)
  }

  async getInsurance(id: number){
    await this._db.show(id).subscribe(success => this.eo = success, error=> console.error('Error to find insurance', error));
  }

  updateEOForm = this._fb.group({
    insurer: this._fb.control('', ),
    apoliceNumber: this._fb.control('', ),
    validity: this._fb.control('', ),
    accession: this._fb.control('', ),
    classification: this._fb.control('', ),
    input: this._fb.control('', ),
    value: this._fb.control('', ),
    totalOfPortions: this._fb.control('', ),
    paymentForm: this._fb.control('', ),
    portion: this._fb.control('', ),
    date: this._fb.control('', ),
    portionValue: this._fb.control('', ),
    cpf: this._fb.control('', ),
    taker: this._fb.control('', ),
    cnpj: this._fb.control('', ),
  })

  public update(){
    this._db.update(this._route.snapshot.params['id'], this.updateEOForm.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Seguro alterado com sucesso',
            'success'
          );
          this._router.navigate(['/eo'])
        },
        error => {
          swal(
            'Error',
            'Erro ao alterar seguro',
            'error'
          );
        })
  }

}

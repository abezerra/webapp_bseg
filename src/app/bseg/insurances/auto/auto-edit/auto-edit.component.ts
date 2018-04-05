import { Component, OnInit } from '@angular/core';
import {AutoService} from "../../../../services/auto.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'app-auto-edit',
  templateUrl: './auto-edit.component.html',
  styleUrls: ['./auto-edit.component.css']
})
export class AutoEditComponent implements OnInit {

  public auto: any;
  constructor(
                private _db: AutoService,
                private _fb: FormBuilder,
                private _router: Router,
                private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getInsurance(this._route.snapshot.params['id']);
    setTimeout(() => {
      this.updateAutoForm.setValue({
        insurer: this.auto.insurer,
        apoliceNumber: this.auto.apoliceNumber,
        validity: this.auto.validity,
        classification: this.auto.classification,
        accession: this.auto.created_at,
        input: this.auto.input,
        value: this.auto.value,
        totalOfPortions: this.auto.totalOfPortions,
        paymentForm: this.auto.paymentForm,
        portion: this.auto.portion,
        date: this.auto.date,
        portionValue: this.auto.portionValue,
        cpf: this.auto.cpf,
        veichle: this.auto.veichle,
        board: this.auto.board,
        yearOfManufacture: this.auto.yearOfManufacture,
        yearOfModel: this.auto.yearOfModel,
      })
    }, 999)
  }

  async getInsurance(id: number){
    await this._db.show(id).subscribe(success => this.auto = success, error=> console.error('Error to find insurance', error));
  }

  updateAutoForm = this._fb.group({
    insurer: this._fb.control('', ),
    apoliceNumber: this._fb.control('', ),
    validity: this._fb.control('', ),
    classification: this._fb.control('', ),
    accession: this._fb.control('', ),
    input: this._fb.control('', ),
    value: this._fb.control('', ),
    totalOfPortions: this._fb.control('', ),
    paymentForm: this._fb.control('', ),
    portion: this._fb.control('', ),
    date: this._fb.control('', ),
    portionValue: this._fb.control('', ),
    cpf: this._fb.control('', ),
    veichle: this._fb.control('', ),
    board: this._fb.control('', ),
    yearOfManufacture: this._fb.control('', ),
    yearOfModel: this._fb.control('', ),
  })

  public update(){
    this._db.update(this._route.snapshot.params['id'], this.updateAutoForm.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Seguro alterado com sucesso',
            'success'
          );
          this._router.navigate(['/auto'])
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

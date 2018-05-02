import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import swal from "sweetalert2";
import {LeaseService} from "../../../../services/lease.service";

@Component({
  selector: 'app-lease-edit',
  templateUrl: './lease-edit.component.html',
  styleUrls: ['./lease-edit.component.css']
})
export class LeaseEditComponent implements OnInit {

  public lease: any;
  constructor(
    private _db: LeaseService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getInsurance(this._route.snapshot.params['id']);
    setTimeout(() => {
      this.updateLeaseForm.setValue({
        insurer: this.lease.insurer,
        apoliceNumber: this.lease.apoliceNumber,
        validity: this.lease.validity,
        accession: this.lease.accession,
        classification: this.lease.classification,
        input: this.lease.input,
        value: this.lease.value,
        totalOfPortions: this.lease.totalOfPortions,
        paymentForm: this.lease.paymentForm,
        portion: this.lease.portion,
        date: this.lease.date,
        portionValue: this.lease.portionValue,
        cpf: this.lease.cpf,
        localeOfRisc: this.lease.localeOfRisc,
        administrator: this.lease.administrator,
        duartion: this.lease.duartion,
      })
    }, 999)
  }

  async getInsurance(id: number){
    await this._db.show(id).subscribe(success => this.lease = success, error=> console.error('Error to find insurance', error));
  }

  updateLeaseForm = this._fb.group({
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
    localeOfRisc: this._fb.control('', [Validators.required]),
    administrator: this._fb.control('', [Validators.required]),
    duartion: this._fb.control('', [Validators.required]),
  })

  public update(){
    this._db.update(this._route.snapshot.params['id'], this.updateLeaseForm.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Seguro alterado com sucesso',
            'success'
          );
          this._router.navigate(['/lease'])
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

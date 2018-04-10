import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {LifeService} from "../../../../services/life.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-life-edit',
  templateUrl: './life-edit.component.html',
  styleUrls: ['./life-edit.component.css']
})
export class LifeEditComponent implements OnInit {

  public life: any;
  constructor(
    private _db: LifeService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getInsurance(this._route.snapshot.params['id']);
    setTimeout(() => {
      this.updateLifeForm.setValue({
        insurer: this.life.insurer,
        apoliceNumber: this.life.apoliceNumber,
        validity: this.life.validity,
        accession: this.life.classification,
        classification: this.life.created_at,
        input: this.life.input,
        value: this.life.value,
        totalOfPortions: this.life.totalOfPortions,
        paymentForm: this.life.paymentForm,
        portion: this.life.portion,
        date: this.life.date,
        portionValue: this.life.portionValue,
        cpf: this.life.cpf,
        name: this.life.client.name,
        email: this.life.client.email,
        birth: this.life.client.birth,
      })
    }, 999)
  }

  async getInsurance(id: number){
    await this._db.show(id).subscribe(success => this.life = success, error=> console.error('Error to find insurance', error));
  }

  updateLifeForm = this._fb.group({
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
  })

  public update(){
    this._db.update(this._route.snapshot.params['id'], this.updateLifeForm.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Seguro alterado com sucesso',
            'success'
          );
          this._router.navigate(['/life'])
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

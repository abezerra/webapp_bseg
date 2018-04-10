import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ResidentialService} from "../../../../services/residential.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-residential-edit',
  templateUrl: './residential-edit.component.html',
  styleUrls: ['./residential-edit.component.css']
})
export class ResidentialEditComponent implements OnInit {

  public residential: any;

  constructor(private _db: ResidentialService,
              private _fb: FormBuilder,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getInsurance(this._route.snapshot.params['id']);
    setTimeout(() => {
      this.updateResidentialForm.setValue({
        insurer: this.residential.insurer,
        apoliceNumber: this.residential.apoliceNumber,
        validity: this.residential.validity,
        accession: this.residential.accession,
        classification: this.residential.classification,
        input: this.residential.input,
        value: this.residential.value,
        totalOfPortions: this.residential.totalOfPortions,
        paymentForm: this.residential.paymentForm,
        portion: this.residential.portion,
        date: this.residential.date,
        portionValue: this.residential.portionValue,
        cpf: this.residential.cpf,
        city: this.residential.city,
        neigbrhood: this.residential.neigbrhood,
        cep: this.residential.cep,
      })
    }, 999)
  }

  async getInsurance(id: number) {
    await this._db.show(id).subscribe(success => this.residential = success, error => console.error('Error to find insurance', error));
  }

  updateResidentialForm = this._fb.group({
    insurer: this._fb.control('', [Validators.required]),
    apoliceNumber: this._fb.control('', [Validators.required]),
    validity: this._fb.control('', [Validators.required]),
    accession: this._fb.control('', [Validators.required]),
    classification: this._fb.control('', [Validators.required]),
    input: this._fb.control('',),
    value: this._fb.control('',),
    totalOfPortions: this._fb.control('',),
    paymentForm: this._fb.control('',),
    portion: this._fb.control('',),
    date: this._fb.control('',),
    portionValue: this._fb.control('',),
    cpf: this._fb.control('', [Validators.required]),
    city: this._fb.control('', [Validators.required]),
    neigbrhood: this._fb.control('', [Validators.required]),
    cep: this._fb.control('', [Validators.required]),
  })

  public update() {
    this._db.update(this._route.snapshot.params['id'], this.updateResidentialForm.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Seguro alterado com sucesso',
            'success'
          );
          this._router.navigate(['/residential'])
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

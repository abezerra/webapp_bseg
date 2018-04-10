import { Component, OnInit } from '@angular/core';
import {BrokerService} from "../../../services/broker.service";
import {FormBuilder, Validators} from "@angular/forms";
import swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-broker-edit-main',
  templateUrl: './broker-edit-main.component.html',
  styleUrls: ['./broker-edit-main.component.css']
})
export class BrokerEditMainComponent implements OnInit {

  public broker: any

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private _db: BrokerService,
              private _fb: FormBuilder) {}

  ngOnInit() {
    this.getBroker(this.route.snapshot.params['id'])
    setTimeout(() => {
      this.updateDepartaments.setValue({
        name: this.broker.name,
        description: this.broker.description,
        slogan: this.broker.slogan,
        ddd: this.broker.ddd,
        cellphone: this.broker.cellphone,
        telephone: this.broker.telephone,
        email: this.broker.email,
        site: this.broker.site,
        cep: this.broker.cep,
        ibge_code: this.broker.ibge_code,
        address: this.broker.address,
        neighborhood: this.broker.neighborhood,
        complement: this.broker.complement,
        city: this.broker.city,
        uf: this.broker.uf,
      })
    }, 999)
  }

  async getBroker(id) {
    await this._db.show(id).subscribe(success => console.log(this.broker = success), error => console.error('Erro', error))
  }

  updateDepartaments = this._fb.group({
    name: this._fb.control('', ),
    description: this._fb.control('', ),
    slogan: this._fb.control('', ),
    ddd: this._fb.control('', ),
    cellphone: this._fb.control('', ),
    telephone: this._fb.control('', ),
    email: this._fb.control('', ),
    site: this._fb.control('', ),
    cep: this._fb.control('', ),
    ibge_code: this._fb.control('', ),
    address: this._fb.control('', ),
    neighborhood: this._fb.control('', ),
    complement: this._fb.control('', ),
    city: this._fb.control('', ),
    uf: this._fb.control('', ),
  })

  ngOnChanges() {

  }

  public update() {
    this._db.update(this.route.snapshot.params['id'], this.updateDepartaments.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Departamento alterado com sucesso',
            'success'
          );
          this.router.navigate(['/broker'])
        },
        error => {
          swal(
            'Error',
            'Erro ao alterar departmaento',
            'error'
          );
        })
  }

}

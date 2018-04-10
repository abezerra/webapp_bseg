import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ClientsService} from "../../../services/clients.service";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  public client: any

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private _db: ClientsService,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.getClient(this.route.snapshot.params['id'])
    setTimeout(() => {
      this.updateClient.setValue({
        name: this.client.name,
        cpf: this.client.cpf,
        rg: this.client.rg,
        ddd_phone: this.client.ddd_phone,
        telefone: this.client.telefone,
        ddd_cellphone: this.client.ddd_cellphone,
        cellphone: this.client.cellphone,
        email: this.client.email,
        whatsapp: this.client.whatsapp,
        address: this.client.address,
        street: this.client.street,
        neighbhrood: this.client.neighbhrood,
        city: this.client.city,
        uf: this.client.uf,
        birth: this.client.birth,
        type: this.client.type,
      })
    }, 999)
  }

  async getClient(id) {
    await this._db.show(id).subscribe(success => this.client = success, error => console.error('Erro', error))
  }

  updateClient = this._fb.group({
    name: this._fb.control('', ),
    cpf: this._fb.control('', ),
    rg: this._fb.control('', ),
    ddd_phone: this._fb.control('', ),
    telefone: this._fb.control('', ),
    ddd_cellphone: this._fb.control('', ),
    cellphone: this._fb.control('', ),
    email: this._fb.control('', ),
    whatsapp: this._fb.control('', ),
    address: this._fb.control('', ),
    street: this._fb.control('', ),
    neighbhrood: this._fb.control('', ),
    city: this._fb.control('', ),
    uf: this._fb.control('', ),
    birth: this._fb.control('', ),
    type: this._fb.control('', ),
  })

  ngOnChanges() {

  }

  public update() {
    this._db.update(this.route.snapshot.params['id'], this.updateClient.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Cliente alterado com sucesso',
            'success'
          );
          this.router.navigate(['/clients'])
        },
        error => {
          swal(
            'Error',
            'Erro ao alterar cliente',
            'error'
          );
        })
  }

}

import { Component, OnInit } from '@angular/core';
import { EOService } from '../../../../services/eo.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-eo-list',
  templateUrl: './eo-list.component.html',
  styleUrls: ['./eo-list.component.css']
})
export class EoListComponent implements OnInit {

  public EOInsurances: any
  public dize: number
  public eo
  constructor(private db: EOService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .then(res => this.EOInsurances = res)
  }

  public show(id: any): void {
    this.db
      .show(id)
      .then(res => this.eo = res)
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel encontrar o seguro'
        })
      })
  }

  public destroy(id: any): void {
    this.db
      .destroy(id)
      .then(res => {
        this.getAll()
        swal(
          'Sucesso',
          'Seguro removido com sucesso',
          'success'
        )
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel remover o seguro'
        })
      })
  }
}

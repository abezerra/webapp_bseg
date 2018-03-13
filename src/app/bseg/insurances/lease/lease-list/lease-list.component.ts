import { Component, OnInit } from '@angular/core';
import { LeaseService } from '../../../../services/lease.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-lease-list',
  templateUrl: './lease-list.component.html',
  styleUrls: ['./lease-list.component.css']
})
export class LeaseListComponent implements OnInit {
  public leaseBoundInsurances: any;
  public insurer: any;
  constructor(private db: LeaseService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .then(res => this.leaseBoundInsurances = res)
      .catch( err => console.error('Insurances not found', err))
  }

  public show(id: any): void {
    this.db
      .show(id)
      .then(res => this.insurer = res)
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
        this.getAll();
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

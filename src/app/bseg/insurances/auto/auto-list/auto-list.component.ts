import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../../../services/auto.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  public autoInsurances: any;
  public insurer: any;
  constructor(private db: AutoService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .then(res => this.autoInsurances = res)
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

import { Component, OnInit } from '@angular/core';
import { ResidentialService } from '../../../../services/residential.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-residential-list',
  templateUrl: './residential-list.component.html',
  styleUrls: ['./residential-list.component.css']
})
export class ResidentialListComponent implements OnInit {
  public residentialInsurances: any;
  public insurer: any;
  constructor(private db: ResidentialService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .then(res => this.residentialInsurances = res)
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

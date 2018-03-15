import { Component, OnInit } from '@angular/core';
import { InsurersService } from '../../../services/insurers.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-insurers-list',
  templateUrl: './insurers-list.component.html',
  styleUrls: ['./insurers-list.component.css']
})
export class InsurersListComponent implements OnInit {

  
  public insurers: any;
  public dize: number;
  public eo;
  constructor(private db: InsurersService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .then(res => this.insurers = res)
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
        this.getAll();
        swal(
          'Sucesso',
          'Seguradora removido com sucesso',
          'success'
        )
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel remover o seguradora'
        })
      })
  }

}

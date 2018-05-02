import {Component, OnInit} from '@angular/core';
import {LeaseService} from '../../../../services/lease.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-lease-list',
  templateUrl: './lease-list.component.html',
  styleUrls: ['./lease-list.component.css']
})
export class LeaseListComponent implements OnInit {
  public leaseBoundInsurances: any;
  public insurer: any;

  constructor(private db: LeaseService) {
  }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .subscribe(success => this.leaseBoundInsurances = success, error => console.error('Insurances not found', error))
  }

  public destroy(id: any): void {
    this.db
      .destroy(id)
      .subscribe(success => {
        this.getAll();
        swal(
          'Sucesso',
          'Seguro removido com sucesso',
          'success'
        )
      }, error => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel remover o seguro'
        })
      })
  }

}

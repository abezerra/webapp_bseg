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
    this.db.index()
           .subscribe(success => this.residentialInsurances = success, error => console.error('Insurances not found', error))
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

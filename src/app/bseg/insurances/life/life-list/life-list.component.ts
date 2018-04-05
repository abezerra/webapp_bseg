import { Component, OnInit } from '@angular/core';
import { LifeService } from '../../../../services/life.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-life-list',
  templateUrl: './life-list.component.html',
  styleUrls: ['./life-list.component.css']
})
export class LifeListComponent implements OnInit {
  public individualLifeInsurances: any;
  public insurer: any;
  constructor(private db: LifeService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db.index().subscribe(success => this.individualLifeInsurances = success,
                              error => console.error('Erro to find insurance', error))
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

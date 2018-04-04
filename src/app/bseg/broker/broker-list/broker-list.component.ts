import {Component, OnInit} from '@angular/core';
import {BrokerService} from "../../../services/broker.service";
import swal from 'sweetalert2'

@Component({
  selector: 'app-broker-list',
  templateUrl: './broker-list.component.html',
  styleUrls: ['./broker-list.component.css']
})
export class BrokerListComponent implements OnInit {

  public broker: any;

  constructor(private _db: BrokerService) {
  }

  ngOnInit() {
    this.getAll()
  }


  public getAll(): void {
    this._db.index().subscribe(data => this.broker = data, err => console.log('erro no get da parada', err))
  }

  public destroy(id: number) {
    this._db.destroy(id).subscribe(data => {
        this.getAll()
        swal('Sucesso', 'Corretora excluida com sucesso', 'success')
      },
      error => console.error('Erro ao excluir corretora'));
  }


  public removeDepartament(id: number) {
    this._db.destroyDepartament(id)
      .subscribe(success => {
        this.getAll()
        swal('Sucesso', 'Departamento excluido com sucesso!', 'success')
      }, error => {
        swal('Error', 'Erro ao excluir o departamento!', 'error')
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.css']
})
export class AlertsListComponent implements OnInit {

  public alerts: any;
  public alert: any;
  constructor(private _db: AlertsService) { }

  ngOnInit() {
    this._index();
  }

  public _index(): void{
    this._db.index().subscribe(success => this.alerts = success, error => error)
  }

  public _show(id: any): void{
    this._db.show(id).subscribe(success => this.alert = success, error => error)
  }

  public _destroy(id: any): void {
    this._db.destroy(id).subscribe(success => {
      swal(
        'Sucesso',
        'Alerta removido com sucesso',
        'success'
      )
    }, error => {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não foi possivel remover o alerta'
      })
    })
  }

}

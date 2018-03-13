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
  constructor(private db: AlertsService) { }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .fetch()
      .then(res => this.alerts = res)
  }

  public show(id: any): void {
    this.db
      .show(id)
      .then(res => this.alert = res)
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel encontrar o alerta'
        })
      })
  }

  public destroy(id: any): void {
    this.db
      .destroy(id)
      .then(res => {
        swal(
          'Sucesso',
          'Alerta removido com sucesso',
          'success'
        )
      })
      .then(r => this.getAll())
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel remover o alerta'
        })
      })
  }

}

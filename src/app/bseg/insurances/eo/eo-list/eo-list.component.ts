import {Component, OnInit} from '@angular/core';
import {EOService} from '../../../../services/eo.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-eo-list',
  templateUrl: './eo-list.component.html',
  styleUrls: ['./eo-list.component.css']
})
export class EoListComponent implements OnInit {

  public EOInsurances: any;
  public dize: number;
  public eo;

  constructor(private db: EOService) {
  }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db.index().subscribe(success => this.EOInsurances = success, error => console.log('Error to find insurance', error))
  }

  public destroy(id: any): void {
    this.db
      .destroy(id)
      .subscribe(success => { this.getAll(); swal( 'Sucesso', 'Seguro removido com sucesso', 'success')},
                    error => {swal({type: 'error', title: 'Oops...', text: 'Não foi possivel remover o seguro'}) })
  }
}

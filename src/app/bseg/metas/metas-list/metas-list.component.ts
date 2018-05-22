import { Component, OnInit } from '@angular/core';
import {MetasService} from "../../../services/metas.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-metas-list',
  templateUrl: './metas-list.component.html',
  styleUrls: ['./metas-list.component.css']
})
export class MetasListComponent implements OnInit {

  public metas: any;
  public current_page: number;
  public last_page: number;
  public total: number;
  public per_page: number;
  public page: any;
  constructor(private _db: MetasService, private toastr: ToastrService) { }

  ngOnInit() {
    this.index(1);
  }

  public index(page: number) {
    this._db.index(page).subscribe(success => {
      this.metas = success.data;
      this.current_page = success.current_page;
      this.last_page = success.last_page;
      this.per_page = success.per_page;
      this.total = success.total;
    }, error => console.log('erru', error));
  }

  public pageChanged(pageNumber: any) {
    this.current_page = pageNumber
    this.index(pageNumber);
  }

  public destroy(id: any): void {
    this._db.destroy(id).subscribe(
      success => {
        this.toastr.success('Meta removida com sucesso', 'Sucesso!');
        this.index(this.current_page);
      },
      error => this.toastr.error('Erro ao remover a meta', 'Error!')
    )
  }

}

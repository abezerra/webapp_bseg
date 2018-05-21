import { Component, OnInit } from '@angular/core';
import {MailService} from "../../../../services/mail.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-mail-list-list',
  templateUrl: './mail-list-list.component.html',
  styleUrls: ['./mail-list-list.component.css']
})
export class MailListListComponent implements OnInit {

  public lists: any;
  public page: any;
  public current_page: number;
  public last_page: number;
  public total: number;
  public per_page: number;
  constructor(private _db: MailService) { }

  ngOnInit() {
    this.index(1)
  }

  public index(page: any){
    this._db.index_lists(page).subscribe(success => {
      this.lists = success.data;
      this.current_page = success.current_page;
      this.last_page = success.last_page;
      this.per_page = success.per_page;
      this.total = success.total;
    }, error => error)
  }

  public pageChanged(pageNumber: any) {
    this.current_page = pageNumber
    this.index(pageNumber);
  }

  public destroy(id: any): void {
    this._db
      .destroy_lists(id)
      .subscribe(success => {
        this.index(this.current_page);
        swal(
          'Sucesso',
          'Lista removida com sucesso',
          'success'
        )
      }, error => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel remover a lista'
        })
      })
  }

}

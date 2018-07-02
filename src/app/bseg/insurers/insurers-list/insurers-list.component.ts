import {Component, OnInit} from '@angular/core';
import {InsurersService} from '../../../services/insurers.service';
import swal from 'sweetalert2'
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-insurers-list',
  templateUrl: './insurers-list.component.html',
  styleUrls: ['./insurers-list.component.css']
})
export class InsurersListComponent implements OnInit {


  public insurers: any;
  public dize: number;
  public eo;
  public current_page: number;
  public last_page: number;
  public total: number;
  public per_page: number;
  public page: any;

  constructor(
    private db: InsurersService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.index(1)
  }

  public index(page: any): void {
    this.db.paginated(page).subscribe(success => {
      this.insurers = success.data;
      this.current_page = success.current_page;
      this.last_page = success.last_page;
      this.per_page = success.per_page;
      this.total = success.total;
    }, error => error)
  }

  public show(id: any): void {
    this.db.show(id).subscribe(
      success => {
        this.eo = success,
          this.current_page = success.current_page;
        this.last_page = success.last_page;
        this.per_page = success.per_page;
        this.total = success.total;
      },
      error => this.toastr.warning('Nenhuma seguradora encontrada', 'Ops!', {
        positionClass: 'toast-top-full-width'
      })
    )
  }

  public destroy(id: any): void {
    this.db.destroy(id).subscribe(
      success => {
        this.toastr.info('Excluido com sucesso', 'Ok!', {
          positionClass: 'toast-top-full-width'
        })
      },
      error => {
        this.toastr.error('Erro ao excluir seguradora', 'Umm!', {
          positionClass: 'toast-top-full-width'
        })
      }
    )

  }

  public pageChanged(pageNumber: any) {
    this.current_page = pageNumber
    this.index(pageNumber);
  }
}

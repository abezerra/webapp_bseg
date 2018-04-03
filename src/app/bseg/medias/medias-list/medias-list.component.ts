import { Component, OnInit } from '@angular/core';
import {MediasService} from "../../../services/medias.service";
import swal from 'sweetalert2'

@Component({
  selector: 'app-medias-list',
  templateUrl: './medias-list.component.html',
  styleUrls: ['./medias-list.component.css']
})
export class MediasListComponent implements OnInit {

  public medias: any;
  public media: any
  constructor(private _db: MediasService) { }

  ngOnInit() {
    this.fetch()
  }

  public fetch(){
    this._db.index().subscribe( data => this.medias = data, error => console.error(error))
  }

  public destroy(id: number){
    this._db.destroy(id).subscribe( data => {
      swal('Sucesso', 'Midia removida com sucesso', 'success')
      this.fetch()
    }, err => console.error(err) )
  }

  public show(id: number){
    this._db.show(id)
      .subscribe( data => console.log(this.media = data), error => console.error('error', error))
  }

  public disable(id: number){
    this._db.update(id).subscribe(data => swal('Sucesso', 'Midia desativada com sucesso', 'success'), error => console.error(error))
  }
}

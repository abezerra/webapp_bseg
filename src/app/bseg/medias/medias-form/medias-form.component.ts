import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MediasService} from "../../../services/medias.service";

declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import api from "../../../../environments/api";

@Component({
  selector: 'app-medias-form',
  templateUrl: './medias-form.component.html',
  styleUrls: ['./medias-form.component.css']
})
export class MediasFormComponent implements OnInit {

  public image: File = null;
  private apiUrl = api.apiUrl
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private _fb: FormBuilder, private _db: MediasService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  newDefaultMedia = this._fb.group({
    description: this._fb.control('', [Validators.required])
  })

  public prepareFileToUpload(event): void {
    //this.image = (<HTMLInputElement>event.target).files[0]
    this.image = <File>event.target.files[0]
  }

  public create() {

    const fd = new FormData();
    fd.append('image', this.image)
    this.http
      .post(`${this.apiUrl}/templatings/defaults`, fd, this.options)
      .subscribe(data => {
        swal(
          'Sucesso',
          'Media cadastrada com sucesso',
          'success'
        );
        this.newDefaultMedia.reset();
        $('#uploadMedia').modal('hide')
      }, error => {
        swal(
          'ERRO',
          'Houve um erro ao cadastrar a midia',
          'error'
        );
      })

  }


}

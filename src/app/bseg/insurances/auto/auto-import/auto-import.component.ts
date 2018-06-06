import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AutoService} from "../../../../services/auto.service";
import {ToastrService} from 'ngx-toastr';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-auto-import',
  templateUrl: './auto-import.component.html',
  styleUrls: ['./auto-import.component.css']
})
export class AutoImportComponent implements OnInit {

  public policy: any;
  public insurers: File = null;

  constructor(private _fb: FormBuilder,
              private _db: AutoService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this._insurers();
  }

  public _insurers(): void{
    this._db.insurers().subscribe(
      success => this.insurers = success,
      error => {
        this.toastr.error('Erro ao fazer upload da apolice', 'Erro!', {
          timeOut: 3000,
          progressAnimation: "decreasing",
          progressBar: true,
          positionClass: 'toast-top-full-width'
        });
      }
    )
  }

  importAuto = this._fb.group({
    insurer_id: this._fb.control('', [Validators.required]),
    page_start: this._fb.control('', [Validators.required]),
    page_end: this._fb.control('', [Validators.required]),
    police_type: this._fb.control('', [Validators.required]),
  });

  public _prepareFileToUpload(event): void {
    //this.policy = (<HTMLInputElement>event.target).files
    this.policy = <File>event.target.files[0]
    console.log('this.policy', this.policy)
  }

  public upload(): void {

    const data = new FormData();

    data.append('insurer_id', this.importAuto.value.insurer_id);
    data.append('page_start', this.importAuto.value.page_start);
    data.append('page_end', this.importAuto.value.page_end);
    data.append('police_type', this.importAuto.value.police_type);
    data.append('policy', this.policy);

    this._db.upload(data).subscribe(
      success => {
        $('#importAuto').modal('hide');
        this.toastr.success('Upload realizado com sucesso', 'Sucesso!', {
          timeOut: 3000,
          progressAnimation: "decreasing",
          progressBar: true,
        });
        this.importAuto.reset();
      },
      error => {
        this.toastr.error('Erro ao fazer upload da apolice', 'Erro!', { timeOut: 3000});

      }
    )
  }


}

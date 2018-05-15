import { Component, OnInit } from '@angular/core';
import {AutoService} from "../../../../services/auto.service";
import swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {MailService} from "../../../../services/mail.service";

@Component({
  selector: 'app-mail-list-edit',
  templateUrl: './mail-list-edit.component.html',
  styleUrls: ['./mail-list-edit.component.css']
})
export class MailListEditComponent implements OnInit {

  public list: any;
  public clients: any;
  constructor(
    private _db: MailService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.show_list(this._route.snapshot.params['id']);
    this.clients_list();
    setTimeout(() => {
      this.updateMialerList.setValue({
       name: this.list.listy.name,
       description: this.list.listy.description,
        participants: this.list.client.name
      })
    }, 999)
  }

  async show_list(id: number){
    await this._db.show(id).subscribe(success => console.log(this.list = success), error=> console.error('Error to find insurance', error));
  }

  public clients_list(): void{
    this._db.clients().subscribe(success => this.clients = success, error => console.log(error))
  }

  updateMialerList = this._fb.group({
    name: this._fb.control('', [Validators.required]),
    description: this._fb.control('', [Validators.required]),
    participants: this._fb.control('', [Validators.required]),
  })

  public update(){
    this._db.update(this._route.snapshot.params['id'], this.updateMialerList.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Seguro alterado com sucesso',
            'success'
          );
          this._router.navigate(['/mail-list'])
        },
        error => {
          swal(
            'Error',
            'Erro ao alterar seguro',
            'error'
          );
        })
  }

}

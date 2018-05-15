import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/components/common/messageservice";
import {MailService} from "../../../../services/mail.service";
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-mail-list-create',
  templateUrl: './mail-list-create.component.html',
  styleUrls: ['./mail-list-create.component.css']
})
export class MailListCreateComponent implements OnInit {

  public clients: any;
  constructor(private _db: MailService,
              private _fb: FormBuilder,
              private _msg: MessageService) { }
  ngOnInit() {
    this.clients_list()
  }

  public clients_list(): void{
    this._db.clients().subscribe(success => this.clients = success, error => console.log(error))
  }

  newMailList =  this._fb.group({
    name: this._fb.control('', [Validators.required]),
    description: this._fb.control('', [Validators.required]),
    participants: this._fb.control('', [Validators.required]),
  });

  public success(){
    this._msg.add({severity: 'success', summary: 'Sucesso', detail: 'Lista criada com sucesso'})
  }

  public create(): void{
    this._db.create_lists(this.newMailList.value).subscribe(
      success => {
        console.log('suc', success)
        this.success()
        this.newMailList.reset();
        $('#newMailList').modal('hide')
      },
      error => {
        this._msg.add({severity: 'error', summary: 'Erro', detail: 'Erro ao criar lista'})
      })
  }

}

import { Component, OnInit } from '@angular/core';
import {MailService} from "../../../../services/mail.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from 'primeng/components/common/messageservice';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-mail-templates-create',
  templateUrl: './mail-templates-create.component.html',
  styleUrls: ['./mail-templates-create.component.css']
})
export class MailTemplatesCreateComponent implements OnInit {

  constructor(private _db: MailService, private _fb: FormBuilder, private _msg: MessageService) { }
  ngOnInit() {}

  newMailTemplate =  this._fb.group({
    name: this._fb.control('', [Validators.required]),
    description: this._fb.control('', [Validators.required]),
    content: this._fb.control('', [Validators.required]),
  });

  public success(){
    this._msg.add({severity: 'success', summary: 'Sucesso', detail: 'Modelo cadastrado com sucesso'})
  }
  public create(): void{
    this._db.create_templating(this.newMailTemplate.value).subscribe(
      success => {
        console.log('suc', success)
        this.success()
        this.newMailTemplate.reset();
        $('#newMailTemplate').modal('hide')
      },
        error => {
          this._msg.add({severity: 'error', summary: 'Erro', detail: 'Erro ao cadastrar modelo'})
        })
  }

}

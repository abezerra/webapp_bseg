import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/components/common/messageservice";
declare var jquery: any;
declare var $: any;
import {SmsService} from "../../../services/sms.service";

@Component({
  selector: 'app-sms-templates-create',
  templateUrl: './sms-templates-create.component.html',
  styleUrls: ['./sms-templates-create.component.css']
})
export class SmsTemplatesCreateComponent implements OnInit {

  constructor(private _db: SmsService, private _fb: FormBuilder, private _msg: MessageService) { }
  ngOnInit() {}

  newSmsTemplate =  this._fb.group({
    name: this._fb.control('', [Validators.required]),
    description: this._fb.control('', [Validators.required]),
    content: this._fb.control('', [Validators.required]),
  });

  public success(){
    this._msg.add({severity: 'success', summary: 'Sucesso', detail: 'Modelo cadastrado com sucesso'})
  }
  public create(): void{
    this._db.create_templating(this.newSmsTemplate.value).subscribe(
      success => {
        console.log('suc', success)
        this.success()
        this.newSmsTemplate.reset();
        $('#newSmsTemplate').modal('hide')
      },
      error => {
        this._msg.add({severity: 'error', summary: 'Erro', detail: 'Erro ao cadastrar modelo'})
      })
  }

}

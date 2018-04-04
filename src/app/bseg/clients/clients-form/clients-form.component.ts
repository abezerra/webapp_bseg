import { Component, OnInit } from '@angular/core';
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // updateDepartaments = this._fb.group({
  //   name: this._fb.control('', [Validators.required]),
  //   cpf: this._fb.control('', [Validators.required]),
  //   rg: this._fb.control('', [Validators.required]),
  //   ddd_phone: this._fb.control('', [Validators.required]),
  //   telefone: this._fb.control('', [Validators.required]),
  //   ddd_cellphone: this._fb.control('', [Validators.required]),
  //   cellphone: this._fb.control('', [Validators.required]),
  //   email: this._fb.control('', [Validators.required]),
  //   whatsapp: this._fb.control('', [Validators.required]),
  //   address: this._fb.control('', [Validators.required]),
  //   street: this._fb.control('', [Validators.required]),
  //   neighbhrood: this._fb.control('', [Validators.required]),
  //   city: this._fb.control('', [Validators.required]),
  //   uf: this._fb.control('', [Validators.required]),
  //   birth: this._fb.control('', [Validators.required]),
  //   from: this._fb.control('', [Validators.required]),
  //   type: this._fb.control('', [Validators.required]),
  // })
}

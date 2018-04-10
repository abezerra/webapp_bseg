import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {BrokerService} from "../../../services/broker.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import swal from 'sweetalert2'

@Component({
  selector: 'app-broker-edit',
  templateUrl: './broker-edit.component.html',
  styleUrls: ['./broker-edit.component.css']
})
export class BrokerEditComponent implements OnInit, OnChanges {

  public broker: any

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private _db: BrokerService,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.getBroker(this.route.snapshot.params['id'])
    setTimeout(() => {
      this.updateDepartaments.setValue({
        broker_id: this.broker.broker_id,
        description: this.broker.description,
        telephone: this.broker.telephone,
        email: this.broker.email,
        whatsapp: this.broker.whatsapp,
      })
    }, 999)
  }

  async getBroker(id) {
    await this._db.showDepartament(id).subscribe(success => console.log(this.broker = success), error => console.error('Erro', error))
  }

  updateDepartaments = this._fb.group({
    broker_id: this._fb.control('',),
    description: this._fb.control('',),
    telephone: this._fb.control('',),
    email: this._fb.control('',),
    whatsapp: this._fb.control('',),
  })

  ngOnChanges() {

  }

  public update() {
    this._db.updateDepartment(this.route.snapshot.params['id'], this.updateDepartaments.value)
      .subscribe(success => {
          swal(
            'Sucesso',
            'Departamento alterado com sucesso',
            'success'
          );
          this.router.navigate(['/broker'])
        },
        error => {
          swal(
            'Error',
            'Erro ao alterar departmaento',
            'error'
          );
        })
  }

}

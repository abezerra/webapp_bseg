import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-clients-show',
  templateUrl: './clients-show.component.html',
  styleUrls: ['./clients-show.component.css']
})
export class ClientsShowComponent implements OnInit {

  public client: any;
  public auto: any;
  public eo: any;
  public life: any;
  public lease: any;
  constructor(
                private _db: ClientsService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.show(this.route.snapshot.params['id']);
  }

  public show(id: number){
    this._db.show(id).subscribe(success => {
      this.client = success
      console.log(this.auto = success.auto)
      this.eo = success.eo
      this.life = success.life
      this.lease = success.lease
    }, error => console.error('error to find client', error))
  }


}

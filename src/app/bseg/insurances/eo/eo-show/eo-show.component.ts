import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EOService} from "../../../../services/eo.service";

@Component({
  selector: 'app-eo-show',
  templateUrl: './eo-show.component.html',
  styleUrls: ['./eo-show.component.css']
})
export class EoShowComponent implements OnInit {

  public eo: any;
  public client: any;
  public coverage: any;

  constructor(private _db: EOService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.show(this._route.snapshot.params['id'])
  }

  public show(id: number) {
    this._db.show(id)
      .subscribe(success => {
          this.eo = success
          this.client = success.client
          this.coverage = success.coverage
        },
        error => console.error('Error to find auto insurance', error))
  }
}

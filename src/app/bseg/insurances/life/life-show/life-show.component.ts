import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LifeService} from "../../../../services/life.service";

@Component({
  selector: 'app-life-show',
  templateUrl: './life-show.component.html',
  styleUrls: ['./life-show.component.css']
})
export class LifeShowComponent implements OnInit {

  public life: any;
  public client: any;
  public coverage: any;

  constructor(private _db: LifeService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.show(this._route.snapshot.params['id'])
  }

  public show(id: number) {
    this._db.show(id)
      .subscribe(success => {
          this.life = success
          this.client = success.client
          this.coverage = success.coverage
        },
        error => console.error('Error to find auto insurance', error))
  }

}

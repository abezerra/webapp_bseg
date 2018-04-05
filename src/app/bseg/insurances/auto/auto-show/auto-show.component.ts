import {Component, OnInit} from '@angular/core';
import {AutoService} from "../../../../services/auto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-auto-show',
  templateUrl: './auto-show.component.html',
  styleUrls: ['./auto-show.component.css']
})
export class AutoShowComponent implements OnInit {

  public auto: any;
  public client: any;
  public coverage: any;

  constructor(private _db: AutoService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.show(this._route.snapshot.params['id'])
  }

  public show(id: number) {
    this._db.show(id)
      .subscribe(success => {
          this.auto = success,
            this.client = success.client
          this.coverage = success.coverage
        },
        error => console.error('Error to find auto insurance', error))
  }

}

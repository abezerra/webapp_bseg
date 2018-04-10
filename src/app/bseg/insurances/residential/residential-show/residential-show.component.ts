import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResidentialService} from "../../../../services/residential.service";

@Component({
  selector: 'app-residential-show',
  templateUrl: './residential-show.component.html',
  styleUrls: ['./residential-show.component.css']
})
export class ResidentialShowComponent implements OnInit {

  public residential: any;
  public client: any;
  public coverage: any;

  constructor(private _db: ResidentialService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.show(this._route.snapshot.params['id'])
  }

  public show(id: number) {
    this._db.show(id)
      .subscribe(success => {
          this.residential = success
          this.client = success.client
          this.coverage = success.coverage
        },
        error => console.error('Error to find auto insurance', error))
  }
}

import { Component, OnInit,  } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Brasal Seguradora';
  pagedescription = 'Brasal Labs';
  bodyClasses = 'skin-green sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private _db: AuthService, private _router: Router) { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-green');
    this.body.classList.add('sidebar-mini');
    this.body.classList.add('sidebar-collapse');
    //validate user
    this._db.user().subscribe(success => console.log('success in user in main', success),
      error => {
        this._router.navigate(['/auth'])
        console.log('redirecionou')
      })
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-green');
    this.body.classList.remove('sidebar-mini');
  }


}

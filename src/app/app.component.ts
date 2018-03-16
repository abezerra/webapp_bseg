import { Component, OnInit,  } from '@angular/core';
import swal from 'sweetalert2'

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

  constructor() { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-green');
    this.body.classList.add('sidebar-mini');
    this.pusher()
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-green');
    this.body.classList.remove('sidebar-mini');
  }

  public pusher(): void  {
    Pusher.logToConsole = true;

    var pusher = new Pusher('b1c9dfd0226ff506116d', {
      cluster: 'us2',
      encrypted: true
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('event', function(data) {
      swal({
        title: 'Notificação do back',
        text: 'auto close',
        timer: 3000,
        onOpen: () => {
          swal.showLoading()
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
        result.dismiss === swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public clients: any;
  public leads: any;
  constructor(private db: ClientsService) { }

  ngOnInit() {
    this.clients_with_policy();
    this.lead()
  }

  public clients_with_policy(): void {
    this.db.clients().subscribe( success => console.log(this.clients =  success), error => console.error('Error to find clients', error))
  }

  public lead(): void {
    this.db.leads().subscribe(success => this.leads = success, error => console.error('Error to find leads', error))
  }

  public show(id: any): void {

  }

  public create(): void {

  }

  public destroy(id: any): void {

  }

}

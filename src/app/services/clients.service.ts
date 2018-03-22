import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ClientsService {

    public apiUrl = api.apiUrl;
    constructor(private http: HttpClient) { }

    public clients(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/clients/client`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public leads(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/clients/leads`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/users`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public show(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/users`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/users`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/users`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

}

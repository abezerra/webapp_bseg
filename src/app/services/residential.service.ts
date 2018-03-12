import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class ResidentialService {

    public apiUrl = api.apiUrl
    constructor(private http: Http) { }

    public clients(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/clients/client`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public index(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/residential`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/residential`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/residential/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(data: any, id: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/residential/${id}`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/residential/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

}
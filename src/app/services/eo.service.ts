import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class EOService {

    public apiUrl = api.apiUrl
    constructor(private http: Http) { }

    public index(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/eo`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/eo`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/eo/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(data: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/eo`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/eo/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

}
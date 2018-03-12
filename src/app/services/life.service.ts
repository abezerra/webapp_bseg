import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class LifeService {

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
                    .get(`${this.apiUrl}/life`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/life`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/life/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(data: any, id: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/life/${id}`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/life/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }
}
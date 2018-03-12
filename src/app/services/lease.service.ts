import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class LeaseService {

    public apiUrl = api.apiUrl
    constructor(private http: Http) { }

    public clients(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/clients`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public index(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/lease`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/lease`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/lease/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(data: any, id: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/lease/${id}`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/lease/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }
}
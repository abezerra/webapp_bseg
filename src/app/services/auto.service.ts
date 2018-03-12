import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class AutoService {

    public apiUrl = api.apiUrl
    constructor(private http: Http) { }

    public index(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/auto`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public clients(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/clients`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/auto`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/auto/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(data: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/auto`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/auto/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

}
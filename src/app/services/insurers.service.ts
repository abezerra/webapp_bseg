import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class InsurersService {

    public apiUrl = api.apiUrl
    constructor(private http: Http) { }

    public index(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/insurers`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/insurers`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
                    .catch( (err: any) => err.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/insurers/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(id: any, data: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/insurers/${id}`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/insurers/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

}
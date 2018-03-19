import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class AlertsService {

    private options = {}
    public apiUrl = api.apiUrl;
    constructor(private http: Http) { }

    public fetch(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/alerts`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public create(data: any): Promise<any> {
        return this.http
                    .post(`${this.apiUrl}/alerts`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
                    .catch( (err: any) => err.json())
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/alerts/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(id: any, data: any): Promise<any> {
        return this.http
                    .put(`${this.apiUrl}/alerts/${id}`, data)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public destroy(id: any): Promise<any> {
        return this.http
                    .delete(`${this.apiUrl}/alerts/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public clients(): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/clients`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

}

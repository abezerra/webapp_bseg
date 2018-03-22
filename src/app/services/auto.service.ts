import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AutoService {

    public apiUrl = api.apiUrl;
    constructor(private http: HttpClient) { }

    public index(): Observable<any> {
        return this.http
                    .get(`${this.apiUrl}/auto`, {
                      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }
                    })

    }

    public clients(): Observable<any> {
        return this.http
                    .get(`${this.apiUrl}/clients`, {
                      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }
                    })

    }

    public create(data: any): Observable<any> {
        return this.http
                    .post(`${this.apiUrl}/auto`, data, {
                      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }
                    })
    }

    public show(id: any): Promise<any> {
        return this.http
                    .get(`${this.apiUrl}/auto/${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }

    public update(data: any): void {
        this.http
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

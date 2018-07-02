import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AutoService {

    public apiUrl = api.apiUrl;
    private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }}
    constructor(private http: HttpClient) { }

    public index(): Observable<any> {
        return this.http.get(`${this.apiUrl}/auto`, this.options)
    }

    public clients(): Observable<any> {
        return this.http.get(`${this.apiUrl}/clients`, this.options)
    }

    public insurers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/insurers`, this.options)
    }

    public create(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/auto`, data, this.options)
    }

    public show(id: any): Observable<any> {
        return this.http.get(`${this.apiUrl}/auto/${id}`, this.options)
    }

    public update(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/auto/${id}`, data, this.options)
    }

    public destroy(id: any): Observable<any> {
        return this.http.delete(`${this.apiUrl}/auto/${id}`, this.options)
    }

    public upload(data: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/parsing`, data, this.options)
    }

}

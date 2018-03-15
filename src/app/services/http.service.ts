import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import api from '../../environments/api'
import 'rxjs/operator/toPromise'

@Injectable()
export class HttpService {

    public apiUrl = api.apiUrl;
    constructor(private http: Http) { }

    public getOfertas(): Promise<any> {
        return this.http.get('http://localhost:3000/ofertas/?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

}

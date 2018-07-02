import {Injectable} from '@angular/core'
import api from '../../environments/api'
import 'rxjs/operator/toPromise'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import * as $ from 'cheerio';


@Injectable()
export class ExtractorService {

  public apiUrl = api.apiUrl;
  private options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}

  constructor(private http: HttpClient) {
  }

  public index(){
    let data = 'http://127.0.0.1:8000/policies_html/f0139486e695c4f7834f7d29a3fd07c3.html';
    let pat = $.load(data)
    console.log('extractor', pat);
  }


}

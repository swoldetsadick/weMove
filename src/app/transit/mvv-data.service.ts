import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { Schedule } from './schedule';

@Injectable()

export class MVVDataService {

  constructor(private http: Http) {}

  getMVVSchdedules(){
    let url1: string = "http://www.mvg-live.de/ims/dfiStaticAuswahl.svc?haltestelle=";
    let url2: string = "frankfurter+ring&ubahn=checked&bus=checked&tram=checked&sbahn=checked";
    let url: string = url1 + url2;
    let headers      = new Headers({ 'Content-Type': 'text/html' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    // Service is refreshed every 1 minute
    return Observable.timer(0, 60000).flatMap(() => { return this.http.get(url).map(response => response)});
    //<Schedule[]>response.json().items
	}

}

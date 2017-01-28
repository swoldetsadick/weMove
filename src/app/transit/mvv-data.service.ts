import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { Schedule } from './schedule';

@Injectable()

export class MVVDataService {

  constructor(private http: Http) {}

  getMVVSchdedules(){
    let url1: string = "http://www.mvg-live.de/MvgLive/MvgLive.jsp#haltestelle=Frankfurter";
    let url2: string = " Ring&gehweg=0&zeilen=25&ubahn=true&bus=true&tram=true&sbahn=false";
    let url: string = url1 + url2;
    // Service is refreshed every 1 minute
    return Observable.timer(0, 60000).flatMap(() => { return this.http.get(url).map(response => <Schedule[]>response.json().items)});
	}

}

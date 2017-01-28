import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Schedule } from './schedule';

@Injectable()

export class PendelDataService {

  constructor(private http: Http) {}

  getPendelSchdedules(){
    let url: string = "";
    // Service is refreshed every 1 minute
    return Observable.timer(0, 6000).flatMap(() => { return this.http.get(url).map(response => <Schedule[]>response.json().items)});
	}

}

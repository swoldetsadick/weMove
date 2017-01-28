import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { NewsFeed } from './newsFeed';

@Injectable()
export class NewsDataService {
  constructor(private http: Http) {}

  getNewsFeeds(newsType: string){
    let site: string = 'http://feeds.reuters.com/' + newsType;
    let url: string = 'https://api.rss2json.com/v1/api.json?rss_url=' + site;
    // Service is refreshed every 10 minutes
    return Observable.timer(0, 600000).flatMap(() => { return this.http.get(url).map(response => <NewsFeed[]>response.json().items)});
	}
}

// Integrate annyang then command are col1 and col2 parameter to annyang

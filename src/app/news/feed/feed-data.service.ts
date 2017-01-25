import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NewsFeed } from './newsFeed';

@Injectable()
export class NewsDataService {
  constructor(private http: Http) {}
  url: string = 'http://feeds.reuters.com/Reuters/worldNews';
	getNewsFeeds(){
		return this.http.get('http://raw.githubusercontent.com/codeschool/WatchUsBuild-Angular2App/master/app/races.json').map(response => <NewsFeed[]>response.json().racesData);
	}
}

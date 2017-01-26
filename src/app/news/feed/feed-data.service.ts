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
    let site: string = 'http://feeds.reuters.com/Reuters/' + newsType;
    let url: string = 'https://api.rss2json.com/v1/api.json?rss_url=' + site;
    // Service is refreshed every 10 minutes
    return Observable.timer(0, 600000).flatMap(() => { return this.http.get(url).map(response => <NewsFeed[]>response.json().items)});
	}
}

//Arts	http://feeds.reuters.com/news/artsculture
//Business	http://feeds.reuters.com/reuters/businessNews
//Company News	http://feeds.reuters.com/reuters/companyNews
//Entertainment	http://feeds.reuters.com/reuters/entertainment
//Environment	http://feeds.reuters.com/reuters/environment
//Health News	http://feeds.reuters.com/reuters/healthNews
//Lifestyle	http://feeds.reuters.com/reuters/lifestyle
//Media	http://feeds.reuters.com/news/reutersmedia
//Money	http://feeds.reuters.com/news/wealth
//Most Read Articles	http://feeds.reuters.com/reuters/MostRead
//Oddly Enough	http://feeds.reuters.com/reuters/oddlyEnoughNews
//Pictures	http://feeds.reuters.com/ReutersPictures
//People	http://feeds.reuters.com/reuters/peopleNews
//Politics	http://feeds.reuters.com/Reuters/PoliticsNews
//Science	http://feeds.reuters.com/reuters/scienceNews
//Sports	http://feeds.reuters.com/reuters/sportsNews
//Technology	http://feeds.reuters.com/reuters/technologyNews
//Top News	http://feeds.reuters.com/reuters/topNews
//US News	http://feeds.reuters.com/Reuters/domesticNews
//World	http://feeds.reuters.com/Reuters/worldNews
// Integrate annyang then command are col1 and col2 parameter to annyang
// First do the news banner and the table

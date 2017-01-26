import { Component } from '@angular/core';
import { NewsDataService } from './feed-data.service';
import { NewsFeed } from './newsFeed';

@Component({
  selector: 'feeds',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  newsfeeds: NewsFeed[];

  constructor(private newsDataService: NewsDataService){}

  ngOnInit(){
    this.newsDataService.getNewsFeeds().subscribe(data => this.newsfeeds = data);
  }

  ngOnchange(){}
}

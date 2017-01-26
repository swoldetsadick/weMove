import { Component} from '@angular/core';
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

  newsType: string;


  ngOnInit(){
    this.newsType = 'worldNews';
    this.newsDataService.getNewsFeeds(this.newsType).subscribe(data => {this.newsfeeds = data});
  }

  changeChannel()//pass parameter in annyang
  {
    if(this.newsType === 'technologyNews')
    {
      this.newsType = 'worldNews';
      this.newsDataService.getNewsFeeds(this.newsType).subscribe(data => {this.newsfeeds = data});
    }
    else
    {
      this.newsType = 'technologyNews';
      this.newsDataService.getNewsFeeds(this.newsType).subscribe(data => {this.newsfeeds = data});
    }
  }
}

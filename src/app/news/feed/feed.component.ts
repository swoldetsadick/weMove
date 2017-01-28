import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NewsDataService } from './feed-data.service';
import { NewsFeed } from './newsFeed';

@Component({
  selector: 'feeds',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  animations: [
    trigger('flyInOut', [
        state('in', style({transform: 'translateY(0)'})),
        transition('void => in', [
            style({transform: 'translateY(-1000%)'}),
            animate(10000)
        ]),
        transition('in => void', [
            animate(10000, style({transform: 'translateY(1000%)'}))
        ])
    ])
]
})

export class FeedComponent {

  newsfeeds: NewsFeed[];
  myWidth: number;
  newsType: string;

  constructor(private newsDataService: NewsDataService){

  }

  ngOnInit(){
    this.newsType = channels[Channels.Technology];
    this.newsDataService.getNewsFeeds(this.newsType).subscribe(data => {this.newsfeeds = data});
  }

  ngAfterContentChecked() {
   if(this.newsfeeds != undefined) {
     this.myWidth = 100 * this.newsfeeds.length;
   }
  }

  changeChannel()//pass parameter in annyang
  {
    if(this.newsType === channels[Channels.Technology])
    {
      this.newsType = channels[Channels.Entertainment];
      this.newsDataService.getNewsFeeds(this.newsType).subscribe(data => {this.newsfeeds = data});
    }
    else
    {
      this.newsType = channels[Channels.Technology];
      this.newsDataService.getNewsFeeds(this.newsType).subscribe(data => {this.newsfeeds = data});
    }
  }
}

enum Channels {
  Arts,
  Business,
  CompanyNews,
  Entertainment,
  Environment,
  HealthNews,
  Lifestyle,
  Media,
  Money,
  MostReadArticles,
  OddlyEnough,
  Pictures,
  People,
  Politics,
  Science,
  Sports,
  Technology,
  TopNews,
  USNews,
  World
}

let channels : Array<string> = [
  "news/artsculture",
  "reuters/businessNews",
  "reuters/companyNews",
  "reuters/entertainment",
  "reuters/environment",
  "reuters/healthNews",
  "reuters/lifestyle",
  "news/reutersmedia",
  "news/wealth",
  "reuters/MostRead",
  "reuters/oddlyEnoughNews",
  "ReutersPictures",
  "reuters/peopleNews",
  "Reuters/PoliticsNews",
  "reuters/scienceNews",
  "reuters/sportsNews",
  "reuters/technologyNews",
  "reuters/topNews",
  "Reuters/domesticNews",
  "Reuters/worldNews"
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MeteoComponent } from './meteo/meteo.component';

import { TrafficComponent } from './traffic/traffic.component';

import { TransitComponent } from './transit/transit.component';

import { NewsComponent } from './news/news.component';
import { LogosComponent } from './news/logos/logos.component';
import { FeedComponent } from './news/feed/feed.component';

@NgModule({
  declarations: [
      AppComponent,

      MeteoComponent,

      TrafficComponent,

      TransitComponent,

      NewsComponent,
      LogosComponent,
      FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }

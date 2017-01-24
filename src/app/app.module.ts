import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { NewsComponent } from './news/news.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TransitComponent } from './transit/transit.component';

@NgModule({
  declarations: [
      AppComponent,
      MeteoComponent,
      NewsComponent,
      TrafficComponent,
      TransitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [
      AppComponent,
      MeteoComponent,
      NewsComponent,
      TrafficComponent,
      TransitComponent
  ]
})
export class AppModule { }
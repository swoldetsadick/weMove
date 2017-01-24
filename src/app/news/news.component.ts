import { Component } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  logoIndex: number;
  i: number = 0;
  constructor() {
    this.logoIndex = 0;
  }
  ngOnInit() {
    setInterval(function() {
      if(this.logoIndex == 0) {
        console.log(this.logoIndex);
        this.logoIndex = 1;
      }
      else if(this.logoIndex == 1) {
        console.log(this.logoIndex);
        this.logoIndex = 2;
      }
      else if(this.logoIndex >= 2){
        console.log(this.logoIndex);
        this.logoIndex = 0;
      }
      else {
        console.log(this.logoIndex);
      }
    }, 5000);
  }
  carousel(myVar: number) {
    if(myVar == 0) {
      console.log(myVar);
      this.logoIndex = 1;
    }
    else if(myVar == 1) {
      console.log(myVar);
      this.logoIndex = 2;
    }
    else if(myVar == 2){
      console.log(myVar);
      this.logoIndex = 0;
    }
    else {
      console.log("NO");
    }
  }
  //https://angular.io/docs/ts/latest/guide/animations.html
}

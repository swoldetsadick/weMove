import { Component } from '@angular/core';

import { MVVDataService } from './mvv-data.service';

@Component({
  selector: 'transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent {
  title: string = 'app works!';
  schedules: Array<Array<String>> = [];
  //Schedule[];
  constructor(private mvvDataService: MVVDataService){

  }

  ngOnInit(){
    this.mvvDataService.getMVVSchdedules().subscribe(data => {this.schedules = data});
  }

}

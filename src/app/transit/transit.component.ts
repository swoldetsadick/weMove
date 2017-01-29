import { Component } from '@angular/core';

import { MVVDataService } from './mvv-data.service';
import { Schedule } from './schedule';

@Component({
  selector: 'transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent {
  title: string = 'app works!';

  constructor(private mvvDataService: MVVDataService){

  }

  ngOnInit(){
    this.mvvDataService.getMVVSchdedules().subscribe(data => {console.log(
      data.text());});
  }
}

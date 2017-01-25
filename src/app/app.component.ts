import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    //width: number = 250;
    //height: number = 250;

    ngOnInit() {
        //this.width = window.innerWidth;
        //this.height = window.innerHeight;
    }

    onResize(event) {
      //this.width = event.target.innerWidth;
      //this.height = event.target.innerHeight;
      location.reload();
    }
}

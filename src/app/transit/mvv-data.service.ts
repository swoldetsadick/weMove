import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class MVVDataService {

  constructor(private http: Http) {}

  getMVVSchdedules(){
    let url1: string = "http://www.mvg-live.de/ims/dfiStaticAuswahl.svc?haltestelle=";
    let url2: string = "frankfurter+ring&ubahn=checked&bus=checked&tram=checked&sbahn=checked";
    let url: string = url1 + url2;
    let headers      = new Headers({ 'Content-Type': 'text/html' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    // Service is refreshed every 1 minute
    return Observable.timer(0, 60000).flatMap(() => { return this.http.get(url)
      .map(response => this.treatResponse(response.text()))});
	}

  treatResponse(data: string){

    let start_index = data.match("<table class=\"departureTable departureView\">").index;
    let end_index = data.match("<table class=\"departureTable footerTable\">").index;
    data = data.substring(start_index, end_index);
    let drives: Array<String> = [];

    let idaho = data.split("</tr>", 100);
    for(var _i = 0; _i < 100; _i++) {
      if(idaho[_i] != undefined) {
        drives.push(idaho[_i]);
      } else {
        break;
      }
    }

    drives = drives.slice(1, (drives.length - 2));
    let order: Array<Array<String>> = [];

    for(let drive in drives) {
      let intermed: Array<string> = [];
      for(var _i = 0; _i < 3; _i++) {
        if(_i == 0) {
          let root = drives[drive].split("</td>", 3)[_i];
          let s = root.length;
          let e = root.match("mn\">").index + 4;
          intermed.push(root.substring(s, e));
        } else if(_i == 1) {
          let root = drives[drive].split("</td>", 3)[_i];
          let e = root.match("<span").index
          root = root.substring(0, e);
          let s = root.length;
          let d = root.match(">").index + 1
          let c = root.substring(d, s).replace("\n", "").replace("\n", "");
          let x: any;
          while(x != -1) {
            c = c.replace("\t", "");
            x = c.search("\t");
          }
          intermed.push(c);
        } else {
          let root = drives[drive].split("</td>", 3)[_i];
          let e = root.match(">").index + 1;
          intermed.push(root.substring(e, root.length).toString());
        }
      }
      order.push(intermed);
    }

    return order;

  }

}

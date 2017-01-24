import { Component } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css'],
})
export class LogosComponent {
  public images = IMAGES;
}
var IMAGES: Image[] = [
  { "title": "BMW Logo", "url": "assets/images/bmw_logo.png" },
  { "title": "Mini Logo", "url": "assets/images/mini_logo.png" },
  { "title": "Rolls Royce Logo", "url": "assets/images/rr_logo.png" },
  { "title": "BMW Logo", "url": "assets/images/bmw_logo.png" },
  { "title": "Mini Logo", "url": "assets/images/mini_logo.png" },
];

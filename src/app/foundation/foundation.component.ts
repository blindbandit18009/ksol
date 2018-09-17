import { Component, OnInit } from '@angular/core';
import { foundationCardss } from '../cardCollection';
import { Card } from '../card';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {

  foundCards :Card[][] = foundationCardss;
  
  constructor() { }

  ngOnInit() {
  }
  

}

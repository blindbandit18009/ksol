import { Component, OnInit } from '@angular/core';
import { foundationCardss } from '../cardCollection';
import { Card } from '../card';
import { CardMoveService } from '../card-move.service';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {

  foundCards :Card[][] = foundationCardss;
  
  constructor(private cardMove: CardMoveService) { }

  ngOnInit() {
  }
  
  allowDrop(ev){
    ev.preventDefault();
  }

  dropToFoundation(ev, foundationIndex){
    this.cardMove.dropToFoundation(ev, foundationIndex);
  }


}

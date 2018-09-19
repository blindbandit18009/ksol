import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { InitializeTableauService } from '../initialize-tableau.service';
import { maneuverCardss } from '../cardCollection';
import { CardMoveService } from '../card-move.service';
import { AutoMoveService } from '../auto-move.service';

@Component({
  selector: 'app-maneuver',
  templateUrl: './maneuver.component.html',
  styleUrls: ['./maneuver.component.css']
})
export class ManeuverComponent implements OnInit {

  //maneuverCards: Card[] = this.initializeManeuver.maneuverCards;
  manCards: Card[] [] = maneuverCardss;

  constructor(
    private initializeManeuver: InitializeTableauService,
    private cardMove: CardMoveService,
    private cardAutoMove: AutoMoveService
    ) { }

  ngOnInit() {
  }

  allowDrop(ev){
    ev.preventDefault();
  }

  dropzone(ev, card, cardCol, cardRow){
    this.cardMove.dropCard(ev, card, cardCol, cardRow);
  }

  dragStart(ev, card, cardCol, cardRow){
    this.cardMove.setDragCard(ev, card, cardCol, cardRow);
  }

  dropBase(ev, baseCol){
    this.cardMove.dropManeuverBase(ev, baseCol);
  }

  cardDblClicked(ev, card, cardCol, cardLoc){
    this.cardAutoMove.autoMove(ev, card, cardCol, cardLoc);
  }



  getMargin(i: number){
    return i*31;
  }

  getSource(card:Card){
    if(card.isFaceUp)
    {
      return '../src/assets/images/'+card.id+'.png';
    }
    else{
      return '../src/assets/images/down.jpg';
    }
  }
}

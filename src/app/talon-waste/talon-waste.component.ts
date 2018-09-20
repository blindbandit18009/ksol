import { Component, OnInit } from '@angular/core';
import { talonCardss, wasteCardss } from '../cardCollection';
import { Card } from '../card';
import { InitializeTableauService } from '../initialize-tableau.service';
import { CardMoveService } from '../card-move.service';
import { AutoMoveService } from '../auto-move.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-talon-waste',
  templateUrl: './talon-waste.component.html',
  styleUrls: ['./talon-waste.component.css']
})
export class TalonWasteComponent implements OnInit {

  constructor(private initializeTalon: InitializeTableauService,
    private cardMove: CardMoveService,
    private autoMove : AutoMoveService,
    private cardSvc: CardService
  ) { }

  ngOnInit() {
  }

  talonCards: Card[] = talonCardss;
  wasteCards: Card[] = wasteCardss;
  initialWasteLength: number;

  

  getWasteMargin(index){

    if(wasteCardss.length >= 3){
      if(wasteCardss.length-1 == index){
        return 40;
      }
      else if(wasteCardss.length-2 == index){
        return 20;
      }
      else{
        return 0;
      }
    }
            
    
    if(wasteCardss.length%3 == 0){  //variation of 3 margins
      if(wasteCardss.length-1 == index){
        return 40;
      }
      else if(wasteCardss.length-2 == index){
        return 20;
      }
      else{
        return 0;
      }
    }

    if(wasteCardss.length%3 == 2){  //variation of 2 margins
      if(wasteCardss.length-1 == index){
        return 20;
      }
      else{
        return 0;
      }
    }
    if(wasteCardss.length%3 == 1){
      return 0;
    }
  }

  getIsDraggable(card){
    if(card == wasteCardss[wasteCardss.length-1]){
      return true;
    }
    return false;
  }

  cardDblClicked(ev, card, cardCol, cardLoc){
    this.autoMove.autoMove(ev, card, cardCol, cardLoc);
  }

  dragStart(ev, card, number, componentFrom){
    this.cardMove.setDragCard(ev, card, number, componentFrom);
  }
}

import { Injectable } from '@angular/core';
import { Card } from './card';
import { talonCardss, wasteCardss, maneuverCardss, foundationCardss } from './cardCollection';

@Injectable({
  providedIn: 'root'
})
export class CardMoveService {

  constructor() { }

  cardDragged;
  cardDraggedCol;
  cardDraggedRow;


  setDragCard(ev, card, cardCol, cardRow){
    this.cardDragged = card;
    this.cardDraggedCol = cardCol;
    this.cardDraggedRow = cardRow;

  }


  dropCard(ev, card, cardCol, cardRow){
    //let cardDrop = card;

    //maneuver to maneuver manipulation
    let isManeuverForTransfer = this.checkMoveManeuver(this.cardDragged, card);
    if(isManeuverForTransfer){
      this.transferCard(cardCol);
    }

  }


  dropManeuverBase(ev, baseCol): void{
    // console.log("card Dragged:" +this.cardDragged.id);
    // console.log("card drag col: " +this.cardDraggedCol);
    // console.log("dropped to maneuver: " +baseCol);
    // let loc: number;
    if(this.cardDragged.rank == 'K'){
      this.transferCard(baseCol);
    }
  }



  transferCard(maneuverColumn){
    let ctr: number = 0;
    let lastIndexOfColumn: number = 0;
    let loc = maneuverCardss[this.cardDraggedCol].indexOf(this.cardDragged);
    lastIndexOfColumn = maneuverCardss[this.cardDraggedCol].length-1;
    
    // let cardHolder: Card[] = [];
    while((loc+ctr) <= lastIndexOfColumn){
      maneuverCardss[maneuverColumn].push(maneuverCardss[this.cardDraggedCol][loc+ctr]);
      ctr++;
    }

    maneuverCardss[this.cardDraggedCol].splice(loc,ctr);

    //flipping cards
    if(maneuverCardss[this.cardDraggedCol].length != 0){
      maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isDraggable = true;
    }



  }


  


  checkMoveManeuver(cardDrag, cardDrop): boolean{ 

    if(cardDrag.color != cardDrop.color){
      if((this.getCardValue(cardDrop.rank) - this.getCardValue(cardDrag.rank)) == 1){
        return true;
      }
    }
    return false;
  }


  getCardValue(card:string): number{
    switch(card){
      case "A": return 1;
      case "2": return 2;
      case "3": return 3;
      case "4": return 4;
      case "5": return 5;
      case "6": return 6;
      case "7": return 7;
      case "8": return 8;
      case "9": return 9;
      case "10": return 10;
      case "J": return 11;
      case "Q": return 12;
      case "K": return 13;
      default: return 0;
    }
  }
  
}



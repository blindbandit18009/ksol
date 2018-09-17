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
    let cardDrop = card;
    let cardDropCol = cardCol;
    console.log("dropped col: " +cardDropCol);
    let cardDropRow = cardRow;
    let loc : number;
    let dropIndex;
    let attribx;
    let parentx;

    //maneuver to maneuver manipulation
    let isManeuverForTransfer = this.checkMoveManeuver(this.cardDragged, cardDrop);
    console.log("returned value" +isManeuverForTransfer);

    if(isManeuverForTransfer){
      maneuverCardss[cardDropCol].push(this.cardDragged);
      console.log(this.cardDragged);
     
      loc = maneuverCardss[this.cardDraggedCol].indexOf(this.cardDragged)

      let dgCard = document.getElementById(this.cardDragged.id);
      let parentDgCard = dgCard.parentElement;
      parentDgCard.removeChild(dgCard);


      maneuverCardss[this.cardDraggedCol].splice(loc,1);
      if(maneuverCardss[this.cardDraggedCol].length != 0){
        maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isDraggable = true;
      }
      

      //flipping of last card --ok
      // if(maneuverCardss[this.cardDraggedCol].length != 0){
      //   let lastCard = maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].id
      //   console.log("lastCard: " +lastCard);
      //   let x = document.getElementById(lastCard);
      //   let srcFaceUp = '../src/assets/images/'+lastCard+'.png';
      //   x.setAttribute('src', srcFaceUp);
      //   x.setAttribute('draggable', 'true');
      // }
            
      // console.log("maneuver"+cardDropCol);
      // dgCard = document.getElementById("maneuver"+cardDropCol);
      // console.log("dgCard element: " +dgCard);
      // console.log("last element: " +dgCard.lastElementChild.id);
      // console.log("length: " +dgCard.children.length);
      
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



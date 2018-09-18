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
  componentFrom;
 

  setDragCard(ev, card, cardCol, componentFrom){
    this.cardDragged = card;
    this.cardDraggedCol = cardCol;
    this.componentFrom = componentFrom;
  }

  dropCard(ev, card, cardCol, cardRow){
    //maneuver to maneuver manipulation
    if(this.componentFrom == 0){                //cardDragged from maneuver
      if(card.id == maneuverCardss[cardCol][maneuverCardss[cardCol].length-1].id){
        let isManeuverForTransfer = this.checkMoveManeuver(this.cardDragged, card);
        if(isManeuverForTransfer){
          this.transferCard(cardCol);
        }
      }
    }
    else if(this.componentFrom == 1){         //cardDragged from waste
      let isWasteForTransfer = this.checkMoveManeuver(this.cardDragged,card);
      if(isWasteForTransfer){
        maneuverCardss[cardCol].push(wasteCardss.pop());
        if(wasteCardss.length != 0){
          wasteCardss[wasteCardss.length-1].isDraggable = true;
        }
      }
    }
  }

  dropManeuverBase(ev, baseCol): void{          //pertains to blank maneuvercolumn
    if(this.componentFrom == 0){                //cardDragged from Maneuver
      if(maneuverCardss[baseCol].length == 0){
        if(this.cardDragged.rank == 'K'){
          this.transferCard(baseCol);
        }
      }   
    }
    else if(this.componentFrom == 1){         //cardDragged from waste
      //let isWasteForTransfer = this.checkMoveManeuver(this.cardDragged,card);
      if(maneuverCardss[baseCol].length == 0){
        if(this.cardDragged.rank == 'K'){
          maneuverCardss[baseCol].push(wasteCardss.pop());
          if(wasteCardss.length != 0){
            wasteCardss[wasteCardss.length-1].isDraggable = true;
          }
        }
      }
      
    }
  }

  transferCard(maneuverColumn){
    let ctr: number = 0;
    let lastIndexOfColumn: number = 0;
    let loc = maneuverCardss[this.cardDraggedCol].indexOf(this.cardDragged);
    lastIndexOfColumn = maneuverCardss[this.cardDraggedCol].length-1;
    
    while((loc+ctr) <= lastIndexOfColumn){
      maneuverCardss[maneuverColumn].push(maneuverCardss[this.cardDraggedCol][loc+ctr]);
      ctr++;
    }
    maneuverCardss[this.cardDraggedCol].splice(loc,ctr);

    //flipping cards
    if(maneuverCardss[this.cardDraggedCol].length != 0){
      maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isDraggable = true;
      maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isFaceUp = true;
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
  
  drawCards(ev){
    let counter = 0;
    if(talonCardss.length < 3){
      while(counter < talonCardss.length){
        let cardHolder = talonCardss.pop();
        cardHolder.isFaceUp = true;
        if(counter+1 == talonCardss.length){
          cardHolder.isDraggable = true;
        }
        wasteCardss.push(cardHolder);
        counter++;
      }
    }
    else{
      while(counter < 3){
        let cardHolder = talonCardss.pop();
        cardHolder.isFaceUp = true;
        if(counter+1 == 3){
          cardHolder.isDraggable = true;
        }
        wasteCardss.push(cardHolder);
        counter++;
      }
    }
  }

  returnToTalon(ev){
    if(talonCardss.length == 0){
      while(wasteCardss.length != 0){
        let cardHolder = wasteCardss.pop();
        cardHolder.isDraggable = false;
        cardHolder.isFaceUp = false;
        talonCardss.push(cardHolder);
      }
    }
    else{
      this.drawCards(ev);
    }
    
  }

  dropToFoundation(ev, foundationIndex){
    let lastCardFoundation = foundationCardss[foundationIndex][foundationCardss[foundationIndex].length-1];
    
    if(foundationCardss[foundationIndex].length == 0){  //empty foundation+
      if(this.cardDragged.rank == 'A'){
        if(this.componentFrom == 0){                    //cardDragged from maneuver
          let cardHolder = maneuverCardss[this.cardDraggedCol].pop();
          foundationCardss[foundationIndex].push(cardHolder);
          if(maneuverCardss[this.cardDraggedCol].length != 0){
            maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isFaceUp = true;
            maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isDraggable = true;
          }
        }
        else if(this.componentFrom == 1){               //cardDragged from waste
          foundationCardss[foundationIndex].push(wasteCardss.pop());
        }
      }
    }
    else if(this.componentFrom == 0){
      if(maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1] == this.cardDragged){
        if(this.transferrableToFoundation(lastCardFoundation, this.cardDragged)){
          let cardHolder = maneuverCardss[this.cardDraggedCol].pop();
          foundationCardss[foundationIndex].push(cardHolder);
          if(maneuverCardss[this.cardDraggedCol].length != 0){
            maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isFaceUp = true;
            maneuverCardss[this.cardDraggedCol][maneuverCardss[this.cardDraggedCol].length-1].isDraggable = true;
          }
        } 
      }
    }
    else if(this.componentFrom == 1){
      if(this.transferrableToFoundation(lastCardFoundation, this.cardDragged)){
        let cardHolder = wasteCardss.pop();
        foundationCardss[foundationIndex].push(cardHolder); 
      }
    }
   
  }
 
  transferrableToFoundation(cardFoundation, draggedCard): boolean{
    if(cardFoundation.suit == draggedCard.suit){
      if(this.getCardValue(draggedCard.rank) - this.getCardValue(cardFoundation.rank) == 1){
        return true;
      }
    }
    return false;
  }

}



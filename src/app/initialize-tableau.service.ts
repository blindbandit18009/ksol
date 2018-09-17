import { Injectable } from '@angular/core';
import { DECK } from './deckOfCards';
import { Card } from './card';
import { maneuverCardss, talonCardss } from './cardCollection';
import { CardMoveService } from './card-move.service';

@Injectable({
  providedIn: 'root'
})
export class InitializeTableauService {
  
  shuffledCards: Card[] = [];
  talonCards: Card[] = [];
  maneuverCards: Card[] = [];
  isShuffled: number = 0;

  constructor(private cardMove: CardMoveService) { }

  getTalonCards(): Card[]{
    if(this.isShuffled != 1){
      this.performShuffle();
    }
    for(let i = 0; i < 24; i++){
      talonCardss.push(this.shuffledCards.pop());
    }
    return this.talonCards;
  }

  getManeuverCards(): Card[]{
    if(this.isShuffled != 1){
      this.performShuffle();
    }
    for(let i = 0; i < 28; i++){
      this.maneuverCards.push(this.shuffledCards.pop());
    }
    
    this.distributeManeuverCards();
  
    return this.maneuverCards;
  }

  performShuffle(): void {
    this.shuffledCards = this.shuffleDeck(DECK);
    this.isShuffled = 1;
  }

  distributeManeuverCards(): void{
    let ctr: number;
    let i: number;
    let cardHolder: Card[] = this.maneuverCards;

    for(ctr = 0; ctr < 7; ctr++){
      for(i=ctr; i>=0; i--){
        let cardHold: Card = cardHolder.pop();

        if(i == 0){
          cardHold.isDraggable = true;
          cardHold.isFaceUp = true;          
        }
         maneuverCardss[ctr].push(cardHold);
      }
    }
  }

 
  shuffleDeck(deckOfCards): Card[] {
    var m = deckOfCards.length, t, i;

    while(m) {
      i = Math.floor(Math.random() * m--);  
      t = deckOfCards[m];
      deckOfCards[m] = deckOfCards[i];
      deckOfCards[i] = t;
    }
    return deckOfCards;
  }
}

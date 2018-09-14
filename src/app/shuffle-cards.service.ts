import { Injectable } from '@angular/core';
import { Card } from './card';
@Injectable({
  providedIn: 'root'
})
export class ShuffleCardsService {

  constructor() { }

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

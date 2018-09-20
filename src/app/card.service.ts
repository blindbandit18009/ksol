import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  

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

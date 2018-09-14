import { Injectable } from '@angular/core';
import { ShuffleCardsService } from './shuffle-cards.service';
import { DECK } from './deckOfCards';
import { Card } from './card';


@Injectable({
  providedIn: 'root'
})
export class InitializeTableauService {

  
  shuffledCards: Card[] = [];
  talonCards: Card[] = [];
  maneuverCards: Card[] = [];
  isShuffled: number = 0;
  maneuver1: Card[] = [];
  maneuver2: Card[] = [];
  maneuver3: Card[] = [];
  maneuver4: Card[] = [];
  maneuver5: Card[] = [];
  maneuver6: Card[] = [];
  maneuver7: Card[] = [];


  constructor(private shuffleCards : ShuffleCardsService) { }

  getTalonCards(): Card[]{
    if(this.isShuffled != 1){
      this.performShuffle();
    }
    for(let i = 0; i < 24; i++){
      this.talonCards.push(this.shuffledCards.pop());
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
    this.shuffledCards = this.shuffleCards.shuffleDeck(DECK);
    this.isShuffled = 1;
  }

  distributeManeuverCards(): void{
    let ctr: number;
    let cardHolder: Card[] = this.maneuverCards;

    this.maneuver1.push(cardHolder.pop());
 
    for(ctr = 0; ctr < 2; ctr++){
      this.maneuver2.push(cardHolder.pop());
    }

    for(ctr = 0; ctr < 3; ctr++){
      this.maneuver3.push(cardHolder.pop());
    }

    for(ctr = 0; ctr < 4; ctr++){
      this.maneuver4.push(cardHolder.pop());
    }

    for(ctr = 0; ctr < 5; ctr++){
      this.maneuver5.push(cardHolder.pop());
    }

    for(ctr = 0; ctr < 6; ctr++){
      this.maneuver6.push(cardHolder.pop());
    }

    for(ctr = 0; ctr < 7; ctr++){
      this.maneuver7.push(cardHolder.pop());
    }
  }

  initializeStyles():void{
    let srcFaceDown = '../src/assets/images/down.jpg';
    //initializing the maneuver cards
    for(let maneuverIndex = 0; maneuverIndex < 7; maneuverIndex++){
      let x = document.getElementById("maneuver"+(maneuverIndex+1));
      let imgs = x.children;
      let imgcnt = imgs.length;
      let isDraggable: boolean = true;
      

      for(let i = 0; i < imgcnt; i++){
        if(i==0){
          imgs[i].setAttribute('style','margin-top: 0px');
        }
        else{
          let mrgn = 'margin-top: '+(35*i)+'px';
          imgs[i].setAttribute('style', mrgn);
        }

        //flipping of cards
         let srcFaceUp = '../src/assets/images/'+imgs[i].id+'.png';
         
        if(maneuverIndex == i){
          imgs[i].setAttribute('src', srcFaceUp);
          isDraggable = true;
        }
        else{
          imgs[i].setAttribute('src', srcFaceDown);
          isDraggable = false;
        }
        imgs[i].setAttribute('alt', imgs[i].id)
        imgs[i].setAttribute('position', 'static');
        //imgs[i].addEventListener("dragstart", ondragstart);
        //imgs[i].addEventListener("dragend", ondragend);

        if(isDraggable){
          //imgs[i].addEventListener("dragenter", ondragenter);
        }

      }
    }

    //initializing the talon cards
    let x = document.getElementById("talonBase");
    let imgs = x.children;
    let imgcnt = imgs.length;
    
    for(let i=0; i<imgcnt; i++){
      imgs[i].setAttribute('src', srcFaceDown);
      //imgs[i].addEventListener('click', onclick);
  
    }
  }

}

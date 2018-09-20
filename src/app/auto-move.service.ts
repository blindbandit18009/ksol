import { Injectable } from '@angular/core';
import { CardMoveService } from './card-move.service';
import { maneuverCardss, wasteCardss, foundationCardss } from './cardCollection';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutoMoveService {

  constructor(
    private cardMove: CardMoveService,
    private msgsvc : MessagesService
  ) { }

  isCardMoved: boolean;

  autoMove(ev, card, cardCol, cardLocation){
    this.isCardMoved = false;
    
    //try to move to maneuver
    if(card.rank != 'A'){
      for(let index = 0; index < 7; index ++){
        if(maneuverCardss[index].length != 0){
          let cardHolder = maneuverCardss[index][maneuverCardss[index].length-1]; //pertaining to last card of column
          if(cardHolder.color != card.color){
            if(this.cardMove.getCardValue(cardHolder.rank) - this.cardMove.getCardValue(card.rank) == 1){
              
              if(cardLocation == 0){                //card from maneuver
                let ctr = 0;
                let loc = maneuverCardss[cardCol].indexOf(card);
  
                while((loc + ctr) <= (maneuverCardss[cardCol].length-1)){
                  maneuverCardss[index].push(maneuverCardss[cardCol][loc + ctr]);
                  ctr++;
                }
                maneuverCardss[cardCol].splice(loc, ctr);
          
                if(maneuverCardss[cardCol].length != 0){
                  maneuverCardss[cardCol][maneuverCardss[cardCol].length-1].isFaceUp = true;
                }
                  this.msgsvc.setMessage(1, card.id, "Maneuver: "+(index+1), "AUTO");
                  this.isCardMoved = true;
                  index = 8;
  
              }         
              else if(cardLocation == 1 && (card == wasteCardss[wasteCardss.length-1])){           //card from waste;
                maneuverCardss[index].push(wasteCardss.pop());
                this.msgsvc.setMessage(1, card.id, "Maneuver: "+(index+1), "AUTO");
                this.isCardMoved = true;
                index = 8;
              }
            }
          }
        }
        else{
          if(card.rank == "K" && cardLocation == 1 && (card == wasteCardss[wasteCardss.length-1])){
            maneuverCardss[index].push(wasteCardss.pop());
            this.msgsvc.setMessage(1, card.id, "Maneuver: "+(index+1), "AUTO");
            this.isCardMoved = true;
            index = 8;
          }
          else if(card.rank == "K" && cardLocation == 0){
            if(maneuverCardss[cardCol][0] != card){
              let ctr = 0;
              let loc = maneuverCardss[cardCol].indexOf(card);
    
              while((loc + ctr) <= (maneuverCardss[cardCol].length-1)){
                maneuverCardss[index].push(maneuverCardss[cardCol][loc + ctr]);
                ctr++;
              }
              maneuverCardss[cardCol].splice(loc, ctr);
        
              if(maneuverCardss[cardCol].length != 0){
                maneuverCardss[cardCol][maneuverCardss[cardCol].length-1].isFaceUp = true;
              }
              this.msgsvc.setMessage(1, card.id, "Maneuver: "+(index+1), "AUTO");
              this.isCardMoved = true;
              index = 8;
              
            }
            
                      
            
          }
        }
      }
    }
    
      

    if(this.isCardMoved == false){      //try to move to foundation
      for(let index = 0; index < 4; index++){
        if(foundationCardss[index].length !=0 ){
          let cardHolder = foundationCardss[index][foundationCardss[index].length-1];
          if(card.suit == cardHolder.suit){
            if(this.cardMove.getCardValue(card.rank) - this.cardMove.getCardValue(cardHolder.rank) == 1){
              if((cardLocation == 0) && (card == maneuverCardss[cardCol][maneuverCardss[cardCol].length-1])){          //card from maneuver
                foundationCardss[index].push(maneuverCardss[cardCol].pop());
                if(maneuverCardss[cardCol].length != 0){
                  maneuverCardss[cardCol][maneuverCardss[cardCol].length-1].isFaceUp = true;
                }
                this.msgsvc.setMessage(1, card.id, "Foundation: "+(index+1), "AUTO");
                this.isCardMoved = true;
                index = 5;
                this.cardMove.checkIfSuccess();

              }
              else if(cardLocation == 1){     //card from waste
                if(card == wasteCardss[wasteCardss.length-1]){
                  foundationCardss[index].push(wasteCardss.pop());
                  this.msgsvc.setMessage(1, card.id, "Foundation: "+(index+1), "AUTO");
                  this.isCardMoved = true;
                  index = 5;
                  this.cardMove.checkIfSuccess();
                }
                
              }
            }
          }
        }
        else{
          if(card.rank == 'A'){
            if(cardLocation == 0){        //ace card is from maneuver
              foundationCardss[index].push(maneuverCardss[cardCol].pop());
              if(maneuverCardss[cardCol].length != 0){
                maneuverCardss[cardCol][maneuverCardss[cardCol].length-1].isFaceUp = true;
              }
              this.msgsvc.setMessage(1, card.id, "Foundation: "+(index+1), "AUTO");
              this.isCardMoved = true;
              index = 5;
            }
            else if(cardLocation == 1){     //ace card is from waste
              if(card == wasteCardss[wasteCardss.length-1]){
                foundationCardss[index].push(wasteCardss.pop());
                this.msgsvc.setMessage(1, card.id, "Foundation: "+(index+1), "AUTO");
                this.isCardMoved = true;
                index = 5;
              }
              
            }
          }
        }
      }
      
      
    }



  }


}

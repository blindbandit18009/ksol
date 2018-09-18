import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  message: string = "Welcome to Solitaire";




  setMessage(flag, cardDrag, dropLoc, status){
    if(flag == 1){
      this.message = ""+status+" move: " +cardDrag+ " transfer to " +dropLoc;
      
    }
    else{
      this.message = status;
    }
    console.log(this.message);
  }
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  
  title: string  = "";
  message: string = "Welcome to Solitaire Game";

  setMessage(flag, cardDrag, dropLoc, status:string){
    this.title = "MOVEMENT";
    if(flag == 1){
      this.message = status+ " move: <br/>" +cardDrag+ " transfer to " +dropLoc;
    }
    else{
      this.message = status;
    }
    console.log(this.message);
  }
  
}

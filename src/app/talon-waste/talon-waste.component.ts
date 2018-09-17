import { Component, OnInit } from '@angular/core';
import { talonCardss } from '../cardCollection';
import { Card } from '../card';
import { InitializeTableauService } from '../initialize-tableau.service';

@Component({
  selector: 'app-talon-waste',
  templateUrl: './talon-waste.component.html',
  styleUrls: ['./talon-waste.component.css']
})
export class TalonWasteComponent implements OnInit {

  constructor(private initializeTalon: InitializeTableauService) { }

  ngOnInit() {
  }

  talonCards: Card[] = talonCardss;
  //wasteCards: Card[] =
  

  getSource(card:Card){
    return '../src/assets/images/'+card.id+'.png';
  }

}

import { Component, OnInit } from '@angular/core';
import { InitializeTableauService } from '../initialize-tableau.service';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private initializeDeckService: InitializeTableauService) { }

  maneuverCards: Card[] = this.initializeDeckService.getManeuverCards();
  talonCards: Card[] = this.initializeDeckService.getTalonCards();

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.initializeDeckService.initializeStyles();
  }

}

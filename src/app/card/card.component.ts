import { Component, OnInit } from '@angular/core';
import { InitializeTableauService } from '../initialize-tableau.service';
import { Card } from '../card';
import { maneuverCardss, talonCardss} from '../cardCollection';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private initializeDeckService: InitializeTableauService) { }

  ngOnInit() {
    this.initializeDeckService.performShuffle();
    this.initializeDeckService.initializeTableau();
  }


  ngAfterViewInit(){
    
  }

}

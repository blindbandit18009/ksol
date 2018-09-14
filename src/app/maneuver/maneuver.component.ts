import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { InitializeTableauService } from '../initialize-tableau.service';

@Component({
  selector: 'app-maneuver',
  templateUrl: './maneuver.component.html',
  styleUrls: ['./maneuver.component.css']
})
export class ManeuverComponent implements OnInit {

  maneuverCards: Card[] = this.initializeManeuver.maneuverCards;
  maneuver1: Card[] = this.initializeManeuver.maneuver1;
  maneuver2: Card[] = this.initializeManeuver.maneuver2;
  maneuver3: Card[] = this.initializeManeuver.maneuver3;
  maneuver4: Card[] = this.initializeManeuver.maneuver4;
  maneuver5: Card[] = this.initializeManeuver.maneuver5;
  maneuver6: Card[] = this.initializeManeuver.maneuver6
  maneuver7: Card[] = this.initializeManeuver.maneuver7;
  
  constructor(private initializeManeuver: InitializeTableauService) { }

  ngOnInit() {
  }

}

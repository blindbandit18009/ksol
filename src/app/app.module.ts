import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FoundationComponent } from './foundation/foundation.component';
import { ManeuverComponent } from './maneuver/maneuver.component';
import { TalonWasteComponent } from './talon-waste/talon-waste.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FoundationComponent,
    ManeuverComponent,
    TalonWasteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

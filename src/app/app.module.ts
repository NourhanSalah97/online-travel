import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { SelectedFlightComponent } from './bonus/selected-flight/selected-flight.component';
import { FilterComponent } from './components/flight-result/filter/filter.component';
import { FlightCardComponent } from './components/flight-result/flight-card/flight-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DurationPipe } from './shared/duration';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightResultComponent,
    SelectedFlightComponent,
    FilterComponent,
    FlightCardComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

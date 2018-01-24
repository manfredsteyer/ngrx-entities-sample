import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightEffects } from './model/flight.effects';
import { StoreModule } from '@ngrx/store';
import { FlightReducer } from './model/flight.reducer';
import { initFlightState } from './model/flight.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    StoreModule.forFeature('flights', FlightReducer, { initialState: initFlightState } ),
    EffectsModule.forFeature([FlightEffects])
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent
  ],
  providers: [
    FlightService,
    FlightEffects
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }

import { Injectable } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { flightsSelector } from './flight.reducer';
import { FlightChangedAction, FlightsLoadAction } from './flight.actions';

@Injectable()
export class FlightFacade {

  flights$: Observable<Flight[]>;

  constructor(private store: Store<AppState>) {
    this.flights$ = store.select(flightsSelector);
  }

  load(from: string, to: string): void {
    this.store.dispatch(new FlightsLoadAction(from, to));
  }

  update(flight: Flight): void {
    this.store.dispatch(new FlightChangedAction(flight.id, flight));
  }

}

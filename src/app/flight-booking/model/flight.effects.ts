import { Injectable } from '@angular/core';
import { FlightService } from '../flight-search/flight.service';
import { Actions, Effect } from '@ngrx/effects';
import { FLIGHTS_LOAD_ACTION, FlightsLoadAction, FlightsLoadedAction } from './flight.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class FlightEffects {

  constructor(private flightService: FlightService, private actions$: Actions) {
  }

  @Effect()
  flightLoadEffect = this
                      .actions$
                      .ofType(FLIGHTS_LOAD_ACTION)
                      .pipe(
                        switchMap((a: FlightsLoadAction ) => this.flightService.find(a.from, a.to)),
                        map(flights => new FlightsLoadedAction(flights))
                      );

}

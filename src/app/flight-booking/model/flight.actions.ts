import { Action } from '@ngrx/store';
import { Flight } from '../../entities/flight';
import { Update } from '@ngrx/entity';
export const FLIGHTS_LOADED_ACTION = 'FLIGHTS_LOADED_ACTION';
export const FLIGHT_CHANGED_ACTION = 'FLIGHTS_CHANGED_ACTION';
export const FLIGHTS_LOAD_ACTION = 'FLIGHTS_LOAD_ACTION';
export const FLIGHTS_LOAD_ERROR_ACTION = 'FLIGHTS_LOAD_ERROR_ACTION';

export class FlightsLoadedAction implements Action {
  readonly type = FLIGHTS_LOADED_ACTION;
  constructor(readonly flights: Flight[]) {
  }
}

export class FlightChangedAction implements Action {
  readonly type = FLIGHT_CHANGED_ACTION;
  constructor(readonly id: number, readonly flight: Partial<Flight>) {
  }
}

export class FlightsLoadAction implements Action {
  readonly type = FLIGHTS_LOAD_ACTION;
  constructor(readonly from: string, readonly to: string) { }
}

export class FlightsLoadErrorAction implements Action {
  readonly type = FLIGHTS_LOAD_ERROR_ACTION;
  constructor() { }
}

export type FlightActions =
  FlightsLoadedAction
  | FlightChangedAction
  | FlightsLoadAction
  | FlightsLoadErrorAction;

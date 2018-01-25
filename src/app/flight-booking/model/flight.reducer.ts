import {
  FLIGHT_CHANGED_ACTION,
  FlightActions, FLIGHTS_LOADED_ACTION
} from './flight.actions';
import { Flight } from '../../entities/flight';
import { createEntityAdapter } from '@ngrx/entity';
import { FlightState } from "./flight.state";
import { createSelector } from '@ngrx/store';

export const flightAdapter = createEntityAdapter<Flight>();

export const defaultFlightSelectors = flightAdapter.getSelectors();

export const flightStateSelector = s => s.flights;
export const flightsSelector = createSelector(flightStateSelector, defaultFlightSelectors.selectAll);

export function FlightReducer(state: FlightState, action: FlightActions): FlightState {
  switch(action.type) {
    case FLIGHTS_LOADED_ACTION:
      return flightAdapter.addAll(action.flights, state);
    case FLIGHT_CHANGED_ACTION:
      return flightAdapter.updateOne({id: action.id, changes: action.flight}, state);
    default:
      return state;
  }
}

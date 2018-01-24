import { FlightState, FlightStatistics } from './flight.state';
import {
  FLIGHT_CHANGED_ACTION, FLIGHTS_LOADED_ACTION, FlightChangedAction,
  FlightsLoadedAction, FLIGHTS_LOAD_ERROR_ACTION
} from './flight.actions';
import { Action } from '@ngrx/store';
import { Flight } from '../../entities/flight';


export function FlightReducer(state: FlightState, action: Action): FlightState {
  switch(action.type) {
    case FLIGHTS_LOADED_ACTION:
      return handleFlightsLoaded(state, action as FlightsLoadedAction);
/*
    case FLIGHTS_LOADED_ACTION:
      break;
    case FLIGHTS_LOAD_ERROR_ACTION:
      break;
*/
    case FLIGHT_CHANGED_ACTION:
      return handleFlightChanged(state, action as FlightChangedAction);
    default:
      return state;
  }
}

function handleFlightsLoaded(state: FlightState, action: FlightsLoadedAction): FlightState {

  // state.flights
  // action.flights
  return {
    statistics: calcStatistics(action.flights),
    flights: action.flights
  }

}

function calcStatistics(flights: Flight[]): FlightStatistics {
  return {
    countDelayed: flights.filter(f => f.delayed).length,
    countInTime: flights.filter(f => !f.delayed).length
  }
}

function handleFlightChanged(state: FlightState, action: FlightChangedAction): FlightState {

  let flight = action.flight;
  let idx = state.flights.findIndex(f => f.id == flight.id);

  let newFlights = [
    ...state.flights.slice(0, idx-1),
    flight,
    ...state.flights.slice(idx+1)
  ];

  return {
    flights: newFlights,
    statistics: calcStatistics(newFlights)
  }

}

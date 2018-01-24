//import { FlightState, initFlightState } from '../flight-booking/model/flight.state';

export interface AppState {
  flights: any;
  otherState: any; // further things in a real word project
}


export let initAppState: AppState = {
  flights: { },
  otherState: null
}




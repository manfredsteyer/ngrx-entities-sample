import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FlightStatistics } from '../model/flight.state';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { FlightChangedAction, FlightsLoadAction } from '../model/flight.actions';
@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  //flights: Array<Flight> = [];

  flights$: Observable<Flight[]>;
  statistics$: Observable<FlightStatistics>;

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(s => s.flights.flights);
    this.statistics$ = this.store.select(s => s.flights.statistics);
  }

  search(): void {

    if (!this.from || !this.to) return;

    //this.flightService.load(this.from, this.to);
    this.store.dispatch(new FlightsLoadAction(this.from, this.to));

    /*
    this.flights.push({
      id: 4711,
      from: 'Graz',
      to: 'Kognito',
      date: '2017-11-13T17:00'
    });

    this.flights.push({
      id: 4712,
      from: 'Graz',
      to: 'Flagranti',
      date: '2017-11-13T17:30'
    });

    this.flights.push({
      id: 4713,
      from: 'Graz',
      to: 'Hamburg',
      date: '2017-11-13T18:00'
    });
    */
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  flightChange(f: Flight): void {
    this.store.dispatch(new FlightChangedAction(f));
  }
}



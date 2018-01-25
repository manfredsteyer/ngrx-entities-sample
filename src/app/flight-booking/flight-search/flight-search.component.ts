import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { FlightChangedAction, FlightsLoadAction } from '../model/flight.actions';
import { flightAdapter, flightsSelector } from '../model/flight.reducer';
import { FlightFacade } from '../model/flight.facade';
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

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;

  constructor(
    private facade: FlightFacade
  ) {
  }

  ngOnInit() {
    this.flights$ = this.facade.flights$;
  }

  search(): void {
    if (!this.from || !this.to) return;
    this.facade.load(this.from, this.to);
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  flightChange(f: Flight): void {
    this.facade.update(f);
  }
}



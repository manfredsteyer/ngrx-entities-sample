
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from '../flight-booking.module';
import { FlightSearchComponent } from './flight-search.component';
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FlightService } from './flight.service';

let flightServiceMock = {
    find(from: string, to: string): Observable<Flight[]> {
      return of([
        { id: 17, from, to, date: '...', delayed: false },
        { id: 18, from, to, date: '...', delayed: false },
        { id: 19, from, to, date: '...', delayed: false },
        { id: 20, from, to, date: '...', delayed: false },
        { id: 21, from, to, date: '...', delayed: false }
      ]);
    }
};

describe('FlightSearchComponent', () => {

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [HttpClientModule, FlightBookingModule],
        declarations: [],
        providers: []
      })
      .overrideComponent(FlightSearchComponent, {
        set: {
          providers: [
            { provide: FlightService, useValue: flightServiceMock }
          ]
        }
      })
      .compileComponents();

  }));

  it('should not have a selected flight initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    expect(comp.selectedFlight).toBeUndefined();
  });

  it('should not search flights w/o from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = '';
    comp.to = '';

    comp.search();

    expect(comp.flights.length).toBe(0);
  });

  it('should search flights w/ from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = 'Hamburg';
    comp.to = 'Graz';

    comp.search();

    expect(comp.flights.length).toBe(5);
  });

})

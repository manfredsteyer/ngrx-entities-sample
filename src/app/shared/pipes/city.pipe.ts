import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): string {

    let short, long;

    switch (value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      default:
        short = long = value; //'ROM';
    }

    if (fmt == 'short') return short;
    return long;

  }

}

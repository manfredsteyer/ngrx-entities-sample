import {
  Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Output() itemChange = new EventEmitter<Flight>();
  constructor() {
    console.debug('ctor', this.selected, this.item);
  }


  ngOnInit() {
    console.debug('onInit', this.selected, this.item);
    // this.selectedChange.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('onChanges', this.selected, this.item);

    if (changes['selected']) {
      console.debug('\tselected changed');
    }
  }

  ngOnDestroy(): void {
    console.debug('onDestroy', this.selected, this.item);
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

  toggleDelay() {
    this.item = {...this.item, delayed: !this.item.delayed};
    // this.item.delayed = !this.item.delayed;
    this.itemChange.next(this.item);
  }

}



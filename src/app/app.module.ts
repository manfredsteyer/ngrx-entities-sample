import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { appReducerMap } from './model/app.reducer';
import { initAppState } from './model/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlightEffects } from './flight-booking/model/flight.effects';
import { EffectsModule } from "@ngrx/effects";

import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';


// let meta = environment.production ? [] : [storeFreeze];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({}, { metaReducers: [storeFreeze]} ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    FlightBookingModule // forFeature
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService}
    // FlightService
    FlightEffects,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

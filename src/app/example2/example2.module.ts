import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component } from './components/example2/example2.component';
import { HttpClientModule } from '@angular/common/http';
import { LOCATIONS_SERVICE } from './services/locations.service';
import { HttpLocationsService } from './services/http-locations.service';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Example2Component, LocationFormComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: LOCATIONS_SERVICE, useClass: HttpLocationsService }],
})
export class Example2Module {}

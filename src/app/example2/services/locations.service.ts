import { Observable } from 'rxjs';
import { EpisodeLocation } from '../episode-location';
import { InjectionToken } from '@angular/core';

export interface LocationsService {
  getLocations(): Observable<EpisodeLocation[]>;
}

export const LOCATIONS_SERVICE = new InjectionToken<LocationsService>('LocationsService');

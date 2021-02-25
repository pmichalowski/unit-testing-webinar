import { LocationsService } from './locations.service';
import { Observable, of } from 'rxjs';
import { EpisodeLocation } from '../episode-location';
import { EPISODE_LOCATION_STUB } from '../episode-location.stub';

export class LocationsServiceStub implements LocationsService {
  getLocations(): Observable<EpisodeLocation[]> {
    return of([EPISODE_LOCATION_STUB]);
  }
}

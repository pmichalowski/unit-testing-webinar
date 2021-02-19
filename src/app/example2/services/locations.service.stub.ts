import { LocationsService } from './locations.service';
import { Observable, of } from 'rxjs';
import { EpisodeLocation } from '../episode-location';

export const EPISODE_LOCATION_STUB: EpisodeLocation = {
  id: 432,
  name: 'Final Space',
};

export class LocationsServiceStub implements LocationsService {
  getLocations(): Observable<EpisodeLocation[]> {
    return of([EPISODE_LOCATION_STUB]);
  }
}

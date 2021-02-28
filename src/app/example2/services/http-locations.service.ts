import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeLocation } from '../episode-location';
import { map } from 'rxjs/operators';
import { LocationsService } from './locations.service';

@Injectable()
export class HttpLocationsService implements LocationsService {
  constructor(private client: HttpClient) {}

  getLocations(): Observable<EpisodeLocation[]> {
    return this.client.get('https://finalspaceapi.com/api/v0/location').pipe(
      map((response: any) => {
        return response.map(location => {
          return {
            id: location.id,
            name: location.name,
          };
        });
      }),
    );
  }
}

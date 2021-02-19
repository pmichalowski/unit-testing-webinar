import { TestBed } from '@angular/core/testing';

import { HttpLocationsService } from './http-locations.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EpisodeLocation } from '../episode-location';

describe('HttpLocationsService', () => {
  let service: HttpLocationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpLocationsService],
    });
    service = TestBed.inject(HttpLocationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the locations list', done => {
    const stubLocations: EpisodeLocation[] = [
      { id: 1, name: 'Earth' },
      { id: 2, name: 'Mars' },
    ];

    service.getLocations().subscribe(locations => {
      expect(locations.length).toBe(2);
      expect(locations).toEqual(
        jasmine.arrayContaining([jasmine.objectContaining({ name: 'Earth' })]),
      );
      done();
    });

    const req = httpMock.expectOne('https://finalspaceapi.com/api/v0/location');
    expect(req.request.method).toBe('GET');
    req.flush(stubLocations);
  });
});

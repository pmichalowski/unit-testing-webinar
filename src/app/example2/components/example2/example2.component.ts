import { Component, Inject, OnInit } from '@angular/core';
import { LOCATIONS_SERVICE, LocationsService } from '../../services/locations.service';
import { Observable } from 'rxjs';
import { EpisodeLocation } from '../../episode-location';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component implements OnInit {
  public locations$: Observable<EpisodeLocation[]>;

  constructor(@Inject(LOCATIONS_SERVICE) private locationsService: LocationsService) {
    this.locations$ = this.locationsService.getLocations();
  }

  ngOnInit(): void {}
}

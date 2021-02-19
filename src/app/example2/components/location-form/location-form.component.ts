import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EpisodeLocation } from '../../episode-location';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit {
  @Input() location: EpisodeLocation;
  @Output() locationChanged = new EventEmitter<EpisodeLocation>();

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}
}

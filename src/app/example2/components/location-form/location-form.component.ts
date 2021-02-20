import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EpisodeLocation } from '../../episode-location';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit, OnDestroy {
  @Input() location: EpisodeLocation;
  @Output() locationChanged = new EventEmitter<EpisodeLocation>();
  form: FormGroup;
  private formSubscription: Subscription;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      id: this.builder.control(this.location?.id, Validators.required),
      name: this.builder.control(this.location?.name, Validators.required),
    });
    this.formSubscription = this.form.valueChanges.subscribe(formData => {
      if (this.form.valid) {
        this.locationChanged.emit(formData);
      }
    });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
}

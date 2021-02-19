import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormComponent } from './location-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NameFormComponent', () => {
  let component: LocationFormComponent;
  let fixture: ComponentFixture<LocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

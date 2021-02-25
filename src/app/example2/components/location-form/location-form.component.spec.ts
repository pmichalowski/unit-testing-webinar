import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormComponent } from './location-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EPISODE_LOCATION_STUB } from '../../episode-location.stub';

describe('NameFormComponent', () => {
  let component: LocationFormComponent;
  let fixture: ComponentFixture<LocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationFormComponent],
      imports: [ReactiveFormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeDefined();
  });

  it('should create the form based on input data', () => {
    component.location = EPISODE_LOCATION_STUB;
    component.ngOnInit();
    expect(component.form.get('name').value).toEqual(EPISODE_LOCATION_STUB.name);
    expect(component.form.get('id').value).toEqual(EPISODE_LOCATION_STUB.id);
  });

  describe('#locationChanged', () => {
    beforeEach(() => {
      spyOn(component.locationChanged, 'emit');
      component.location = EPISODE_LOCATION_STUB;
      component.ngOnInit();
    });

    // 1 way - updating the form through the view
    it('should output the data on input value changes', () => {
      const nameInput = fixture.debugElement.query(By.css('[data-selector=location-name-input]'));
      nameInput.nativeElement.value = 'Lorem';
      nameInput.nativeElement.dispatchEvent(new Event('input'));
      expect(component.locationChanged.emit).toHaveBeenCalledWith(
        jasmine.objectContaining({ name: 'Lorem' }),
      );
    });

    // 2nd way - updating the form through the patchValue/setValue method
    it('should output the data on form value changes', () => {
      component.form.patchValue({ name: 'Ipsum' });
      expect(component.locationChanged.emit).toHaveBeenCalledWith(
        jasmine.objectContaining({ name: 'Ipsum' }),
      );
    });

    it('should not output the data when the form value changed to invalid data', () => {
      component.form.patchValue({ name: '' });
      expect(component.locationChanged.emit).not.toHaveBeenCalled();
    });

    it('should not output the form data after the component was destroyed', () => {
      component.ngOnDestroy();
      component.form.patchValue({ name: 'FooBar' });
      expect(component.locationChanged.emit).not.toHaveBeenCalled();
    });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2Component } from './example2.component';
import { LOCATIONS_SERVICE } from '../../services/locations.service';
import { LocationsServiceStub } from '../../services/locations.service.stub';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Example2Component', () => {
  let component: Example2Component;
  let fixture: ComponentFixture<Example2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Example2Component],
      providers: [{ provide: LOCATIONS_SERVICE, useClass: LocationsServiceStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.locations$).toBeDefined();
  });

  // an example to show you how to test if something is being rendered properly on the template
  it('should display the title', () => {
    const titleTag = fixture.debugElement.query(By.css('h1'));
    expect(titleTag.nativeElement.innerHTML).toContain('Example');
  });
});

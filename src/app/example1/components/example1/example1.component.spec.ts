import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example1Component } from './example1.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Example1Component', () => {
  let component: Example1Component;
  let fixture: ComponentFixture<Example1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Example1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // without it we'll have warnings in the console
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

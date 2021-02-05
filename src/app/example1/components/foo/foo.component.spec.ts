import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';
import { CharactersService } from '../../services/characters.service';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooComponent],
      providers: [CharactersService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

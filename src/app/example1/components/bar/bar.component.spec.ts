import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent } from './bar.component';
import { CharactersService } from '../../services/characters.service';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarComponent],
      providers: [CharactersService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

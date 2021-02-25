import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TotalCountComponent } from './total-count.component';
import { CharactersService } from '../../services/characters.service';
import { CharactersServiceStub } from '../../services/characters.service.stub';
import { of } from 'rxjs';
import { CHARACTER_STUB } from '../../character.stub';

describe('TotalCountComponent', () => {
  let component: TotalCountComponent;
  let fixture: ComponentFixture<TotalCountComponent>;
  let service: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCountComponent],
      providers: [{ provide: CharactersService, useClass: CharactersServiceStub }],
    }).compileComponents();
    service = TestBed.inject(CharactersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the total count of characters', fakeAsync(() => {
    spyOn(service, 'getCharacters').and.returnValue(of([CHARACTER_STUB]));
    component.getCharactersAmount();
    tick();
    expect(service.getCharacters).toHaveBeenCalled();
    expect(component.characters.length).toBeGreaterThan(0);
    expect(component.characters[0]).toEqual(CHARACTER_STUB);
  }));
});

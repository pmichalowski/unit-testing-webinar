import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TotalCountComponent } from './total-count.component';
import { CharactersService } from '../../services/characters.service';
import { CHARACTER_STUB, CharactersServiceStub } from '../../services/characters.service.stub';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('TotalCountComponent', () => {
  let component: TotalCountComponent;
  let fixture: ComponentFixture<TotalCountComponent>;
  let service: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCountComponent],
      providers: [CharactersService], // this is bad
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

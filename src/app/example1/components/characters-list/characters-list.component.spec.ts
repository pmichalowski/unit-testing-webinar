import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListComponent } from './characters-list.component';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../character';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let service: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      providers: [CharactersService],
    }).compileComponents();
    service = TestBed.inject(CharactersService);
  }));

  beforeEach(() => {
    spyOn(service, 'getCharacters');
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service.getCharacters).toHaveBeenCalled();
  });

  it('should get the character name', () => {
    const stubCharacter: Character = { name: 'John', id: 1, status: 'Alive' };
    expect(component.getCharacterName(stubCharacter)).toEqual('JOHN');
  });
});

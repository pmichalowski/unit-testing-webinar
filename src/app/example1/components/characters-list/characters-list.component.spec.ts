import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListComponent } from './characters-list.component';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../character';
import { CHARACTER_STUB } from '../../character.stub';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let service: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      providers: [
        {
          provide: CharactersService,
          useValue: {
            getCharacters() {
              return of([{ id: 11111, name: 'Gary Goodspeed', status: 'Alive' }]);
            },
            saveCharacter() {},
          },
        },
      ],
    }).compileComponents();
    service = TestBed.inject(CharactersService);
  }));

  beforeEach(() => {
    spyOn(service, 'getCharacters').and.callThrough();
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service.getCharacters).toHaveBeenCalled();
  });

  it('should get the character name', () => {
    const stubCharacter: Character = { name: 'Tribore', id: 1, status: 'Alive' };
    expect(component.getCharacterName(stubCharacter)).toEqual('TRIBORE');
  });

  it('should save the character', () => {
    spyOn(service, 'saveCharacter');
    component.saveCharacter(CHARACTER_STUB);
    expect(service.saveCharacter).toHaveBeenCalledWith(CHARACTER_STUB);
  });

  // testing via template
  it('should save the character after button click', () => {
    spyOn(service, 'saveCharacter');
    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    button.nativeElement.click();
    expect(service.saveCharacter).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'Gary Goodspeed' }),
    );
  });
});

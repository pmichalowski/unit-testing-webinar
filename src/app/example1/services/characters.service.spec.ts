import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { CHARACTER_STUB } from '../character.stub';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersService],
    });
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the characters list', done => {
    service.getCharacters().subscribe(characters => {
      expect(characters.length).toBeGreaterThan(0);
      expect(characters[0].name).toEqual('Gary Goodspeed');
      done();
    });
  });

  it('should save character', () => {
    service.saveCharacter(CHARACTER_STUB);
    expect(service.savedCharacter).toEqual(CHARACTER_STUB);
  });
});

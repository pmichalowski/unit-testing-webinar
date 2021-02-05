import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';

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

  it('should transform test to uppercase', () => {
    expect(service.transformToUpperCase('beer')).toEqual('BEER');
  });

  it('should get the characters list', done => {
    service.getCharacters().subscribe(characters => {
      expect(characters.length).toBeGreaterThan(0);
      expect(characters[0].name).toEqual('Gary Goodspeed');
      done();
    });
  });
});

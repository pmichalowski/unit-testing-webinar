import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../character';

@Injectable()
export class CharactersService {
  constructor() {}

  transformToUpperCase(value: string): string {
    return value.toUpperCase();
  }

  getCharacters(): Observable<Character[]> {
    return of([
      { id: 1, name: 'Gary Goodspeed', status: 'Alive' },
      { id: 2, name: 'Mooncake', status: 'Alive' },
    ]);
  }
}

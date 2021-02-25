import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../character';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  public savedCharacter: Character;

  getCharacters(): Observable<Character[]> {
    return of([
      { id: 1, name: 'Gary Goodspeed', status: 'Alive' },
      { id: 2, name: 'Mooncake', status: 'Alive' },
    ]);
  }

  saveCharacter(character: Character): void {
    this.savedCharacter = character;
  }
}

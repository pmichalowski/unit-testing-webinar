import { Observable, of } from 'rxjs';
import { Character } from '../character';

export class CharactersServiceStub {
  getCharacters(): Observable<Character[]> {
    return of([]);
  }
  saveCharacter() {}
}

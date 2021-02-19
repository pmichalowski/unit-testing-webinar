import { Observable, of } from 'rxjs';
import { Character } from '../character';

export const CHARACTER_STUB: Character = {
  id: 444,
  name: 'Nightfall',
  status: 'Alive',
};

export class CharactersServiceStub {
  getCharacters(): Observable<Character[]> {
    return of([CHARACTER_STUB]);
  }
}

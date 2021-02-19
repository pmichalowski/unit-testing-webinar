import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../character';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharactersService {
  getCharacters(): Observable<Character[]> {
    return of([
      { id: 1, name: 'Gary Goodspeed', status: 'Alive' },
      { id: 2, name: 'Mooncake', status: 'Alive' },
    ]);
  }

  // constructor(private client: HttpClient) {}

  /*getCharacters(): Observable<Character[]> {
    return this.client.get('https://finalspaceapi.com/api/v0/character').pipe(
      map((response: any) =>
        response.map(characterDTO => {
          return { id: characterDTO.id, name: characterDTO.name, status: characterDTO.status };
        }),
      ),
    );
  }*/
}

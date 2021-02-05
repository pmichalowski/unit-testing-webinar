import { Component } from '@angular/core';
import { Character } from '../../character';
import { Observable } from 'rxjs';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent {
  public characters$: Observable<Character[]> = this.characterService.getCharacters();

  constructor(private characterService: CharactersService) {}

  getCharacterName(character: Character): string {
    return this.characterService.transformToUpperCase(character.name);
  }
}

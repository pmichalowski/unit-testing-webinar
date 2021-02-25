import { Component } from '@angular/core';
import { Character } from '../../character';
import { Observable } from 'rxjs';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  public characters$: Observable<Character[]>;

  constructor(private characterService: CharactersService) {
    this.characters$ = this.characterService.getCharacters();
  }

  getCharacterName(character: Character): string {
    return character.name.toUpperCase();
  }

  saveCharacter(character: Character): void {
    this.characterService.saveCharacter(character);
  }
}

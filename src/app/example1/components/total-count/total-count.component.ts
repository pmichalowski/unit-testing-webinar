import { Component } from '@angular/core';
import { Character } from '../../character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.scss'],
})
export class TotalCountComponent {
  public characters: Character[];

  constructor(private characterService: CharactersService) {}

  getCharactersAmount() {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }
}

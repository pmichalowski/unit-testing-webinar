import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  public characters$: Observable<Character[]> = this.characterService.getCharacters();

  constructor(private characterService: CharactersService) {}

  public getArrayLength(array: any[]): number {
    return array.length;
  }
}

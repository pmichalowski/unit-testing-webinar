import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { TotalCountComponent } from './components/total-count/total-count.component';
import { Example1Component } from './components/example1/example1.component';

@NgModule({
  declarations: [CharactersListComponent, TotalCountComponent, Example1Component],
  imports: [CommonModule],
  providers: [],
})
export class Example1Module {}

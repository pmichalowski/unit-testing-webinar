import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example3Component } from './components/example3/example3.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';



@NgModule({
  declarations: [Example3Component, DebounceClickDirective],
  imports: [
    CommonModule
  ]
})
export class Example3Module { }

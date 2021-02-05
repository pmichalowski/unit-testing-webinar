import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './components/foo/foo.component';
import { BarComponent } from './components/bar/bar.component';
import { Example1Component } from './components/example1/example1.component';

@NgModule({
  declarations: [FooComponent, BarComponent, Example1Component],
  imports: [CommonModule],
})
export class Example1Module {}

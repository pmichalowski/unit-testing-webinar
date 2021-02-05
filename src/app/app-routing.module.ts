import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/components/example1/example1.component';

const routes: Routes = [
  { path: 'example1', component: Example1Component },
  { path: '**', redirectTo: 'example1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

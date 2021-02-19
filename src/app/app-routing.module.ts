import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/components/example1/example1.component';
import { Example2Component } from './example2/components/example2/example2.component';

const routes: Routes = [
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  { path: '**', redirectTo: 'example1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

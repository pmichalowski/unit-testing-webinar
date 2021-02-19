import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Module } from './example1/example1.module';
import { Example2Module } from './example2/example2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Example1Module, Example2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

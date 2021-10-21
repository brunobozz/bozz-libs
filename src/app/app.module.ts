import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BozzCalendarModule } from 'projects/bozz-calendar/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BozzCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

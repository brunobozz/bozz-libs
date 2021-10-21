import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BozzCalendarComponent } from './bozz-calendar.component';

@NgModule({
  declarations: [BozzCalendarComponent],
  imports: [BrowserModule],
  exports: [BozzCalendarComponent],
})
export class BozzCalendarModule {}

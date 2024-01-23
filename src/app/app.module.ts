import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CommoditiesTableComponent} from '@features/commodities-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    CommoditiesTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

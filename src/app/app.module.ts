import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CommoditiesTableComponent} from '@features/commodities-table';
import {SidebarModule} from 'primeng/sidebar';
import { AppComponent } from './app.component';
import {MainHeaderComponent} from '@components';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    CommoditiesTableComponent,
    SidebarModule,
    MainHeaderComponent,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

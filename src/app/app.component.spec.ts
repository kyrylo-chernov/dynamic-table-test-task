import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CommoditiesTableComponent} from '@features/commodities-table';
import {MainHeaderComponent} from '@components';
import {ButtonModule} from 'primeng/button';
import {CommoditiesFilterFormComponent} from '@features/commodities-filter-form';
import {CommoditiesNameSearchComponent} from '@features/commodities-name-search';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      TableModule,
      InputTextModule,
      CommoditiesTableComponent,
      SidebarModule,
      MainHeaderComponent,
      ButtonModule,
      CommoditiesFilterFormComponent,
      CommoditiesNameSearchComponent,
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

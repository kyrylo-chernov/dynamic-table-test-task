import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditiesNameSearchComponent } from './commodities-name-search.component';

describe('CommoditiesNameSearchComponent', () => {
  let component: CommoditiesNameSearchComponent;
  let fixture: ComponentFixture<CommoditiesNameSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommoditiesNameSearchComponent]
    });
    fixture = TestBed.createComponent(CommoditiesNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

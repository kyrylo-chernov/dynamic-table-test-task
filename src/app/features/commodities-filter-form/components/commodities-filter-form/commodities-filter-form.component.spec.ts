import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditiesFilterFormComponent } from './commodities-filter-form.component';

describe('CommoditiesFilterFormComponent', () => {
  let component: CommoditiesFilterFormComponent;
  let fixture: ComponentFixture<CommoditiesFilterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommoditiesFilterFormComponent]
    });
    fixture = TestBed.createComponent(CommoditiesFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

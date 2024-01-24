import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { DataService } from './data.service';
import { FilterFields } from '@models';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it(
    'should filter commodities based on provided filters, and return right elements count',
    fakeAsync(() => {

    const filters: FilterFields = {
      category: 'cat 2',
      priceFrom: 300,
      priceTo: 800,
      search: 'Wireless',
    };

    let result: any;

    service.getCommodities(filters).subscribe((data) => {
      result = data;
    });

    tick();
    expect(result.length).toBe(1);

  }));

  it('should return all 1000 commodities when no filters are provided', fakeAsync(() => {
    const filters: FilterFields = {
      category: '',
      priceFrom: 0,
      priceTo: 10000,
      search: '',
    };

    let result: any;

    service.getCommodities(filters).subscribe((data) => {
      result = data;
    });

    tick();
    expect(result.length).toBe(1000);

  }));

  it(
    'results should be equal filters',
    fakeAsync(() => {

      const filters: FilterFields = {
        category: 'cat 2',
        priceFrom: 300,
        priceTo: 800,
        search: 'Wireless',
      };

      let result: any;

      service.getCommodities(filters).subscribe((data) => {
        result = data;
      });

      tick();
      for (const item of result) {
        expect(item.category).toEqual(filters.category);
        expect(item.price >= filters.priceFrom && item.price <= filters.priceTo).toBeTrue();
        expect(item.name.includes(filters.search)).toBeTrue();
      }

    }));

});

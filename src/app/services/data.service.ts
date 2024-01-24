import {Injectable} from '@angular/core';
import {from, Observable, tap} from 'rxjs';
import {Commodity, FilterFields} from '@models';
import {COMMODITIES} from '@assets/mock-data';

@Injectable({ providedIn: 'root' })
export class DataService {

  public getCommodities(filters: Partial<FilterFields>): Observable<Commodity[]> {

    // SIMPLE VERSION, WORKS FINE EVEN WITH 10000 ELEMENT
    // return of(COMMODITIES
    //   .filter((item) => (!filters.category || item.category === filters.category))
    //   .filter((item) => (!filters.priceFrom || item.price >= filters.priceFrom))
    //   .filter((item) => (!filters.priceTo || item.price <= filters.priceTo))
    //   .filter((item) => (!filters.search || item.name.toLowerCase().includes(filters.search.toLowerCase())))
    // );

    // MACROTASK PLANNING VERSION
    return from(
      (async () => {
        const categoryFilteredArray = await this.filterArrayAsync<Commodity>(
          COMMODITIES, (item) => (!filters.category || item.category === filters.category));

        const priceFromFilteredArray = await this.filterArrayAsync<Commodity>(
          categoryFilteredArray, (item) => (!filters.priceFrom || item.price >= filters.priceFrom));

        const priceToFilteredArray = await this.filterArrayAsync<Commodity>(
          priceFromFilteredArray, (item) => (!filters.priceTo || item.price <= filters.priceTo));

        return await this.filterArrayAsync<Commodity>(
          priceToFilteredArray,
          (item) => (!filters.search || item.name.toLowerCase().includes(filters.search.toLowerCase())));
      })()
    );
  }

  private filterArrayAsync<T>(array: T [], filterFunction: (item: any) => boolean): Promise<T[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = array.filter(filterFunction);
        resolve(result);
      }, 0)
    })
  }
}

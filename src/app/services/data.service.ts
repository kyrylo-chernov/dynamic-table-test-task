import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Commodity, FilterFields} from '@models';
import {COMMODITIES} from '@assets/mock-data';

@Injectable({ providedIn: 'root' })
export class DataService {
  public getCommodities(filters: Partial<FilterFields>): Observable<Commodity[]> {
      return of(COMMODITIES
        .filter((item) => (!filters.category || item.category === filters.category))
        .filter((item) => (!filters.priceFrom || item.price >= filters.priceFrom))
        .filter((item) => (!filters.priceTo || item.price <= filters.priceTo))
        .filter((item) => (!filters.search || item.name.toLowerCase().includes(filters.search.toLowerCase())))
      );
  }
}

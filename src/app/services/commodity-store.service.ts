import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Commodity} from '@models';
import {DataService} from './data.service';
import {FilterStore} from './filter-store.service';
import {switchMap, tap} from 'rxjs';

interface CommodityState {
  commodities: Commodity[];
}

@Injectable({ providedIn: 'root' })
export class CommodityStore extends ComponentStore<CommodityState> {
  constructor(private readonly dataService: DataService, private readonly filterStore: FilterStore) {
    super({ commodities: [] });
    this.loadCommodities();
  }

  public readonly commodities$ = this.select(
    (state) => state.commodities
  );

  public readonly loadCommodities = this.effect<void>((trigger$) =>
    trigger$.pipe(
      switchMap(() => this.filterStore.filters$),
      switchMap((filters) => this.dataService.getCommodities(filters)),
      tap((commodities) => this.updateState({ commodities }))
    )
  );

  private updateState(newState: Partial<CommodityState>): void {
    this.patchState(newState);
  }
}

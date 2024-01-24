import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {CommodityStore, FilterStore} from '@services';
import {ChipModule} from 'primeng/chip';
import {SortOrderPipe} from '@pipes';
import {filter, take} from 'rxjs';

@Component({
  selector: 'app-commodities-table',
  standalone: true,
  imports: [CommonModule, InputTextModule, SharedModule, TableModule, ChipModule, SortOrderPipe],
  templateUrl: './commodities-table.component.html',
  styleUrls: ['./commodities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesTableComponent {
  constructor(
    public readonly commodityStore: CommodityStore,
    public readonly filterStore: FilterStore,
  ) {
  }

  public setSorting($event: { field: string, order: 1 | -1}): void {
    const futureSortOrder = $event.order < 0 ? 'asc' : 'desc';

    this.filterStore.sortOrder$.pipe(
      take(1),
      filter(sortOrder => sortOrder !== futureSortOrder)
    ).subscribe(() => {
      this.filterStore.updateFilter({ sortOrder: futureSortOrder });
      this.commodityStore.loadCommodities();
    })
  }
}

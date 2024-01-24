import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {CommodityStore} from '@services';

@Component({
  selector: 'app-commodities-table',
  standalone: true,
  imports: [CommonModule, InputTextModule, SharedModule, TableModule],
  templateUrl: './commodities-table.component.html',
  styleUrls: ['./commodities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesTableComponent {
  constructor(public readonly commodityStore: CommodityStore) {
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Commodity} from '@models';
import {COMMODITIES} from '@assets/mock-data';
import {InputTextModule} from 'primeng/inputtext';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-commodities-table',
  standalone: true,
  imports: [CommonModule, InputTextModule, SharedModule, TableModule],
  templateUrl: './commodities-table.component.html',
  styleUrls: ['./commodities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesTableComponent {
  data: Commodity[] = COMMODITIES;

  customFilter(value: string, field: string) {
  }
}

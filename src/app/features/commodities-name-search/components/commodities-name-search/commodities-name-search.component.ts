import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-commodities-name-search',
  standalone: true,
  imports: [CommonModule, InputTextModule],
  templateUrl: './commodities-name-search.component.html',
  styleUrls: ['./commodities-name-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesNameSearchComponent {

}

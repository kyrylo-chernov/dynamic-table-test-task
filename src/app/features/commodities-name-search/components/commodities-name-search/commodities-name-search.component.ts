import {ChangeDetectionStrategy, Component, DestroyRef, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {CommodityStore, FilterStore} from '@services';

@Component({
  selector: 'app-commodities-name-search',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './commodities-name-search.component.html',
  styleUrls: ['./commodities-name-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesNameSearchComponent implements OnInit {
  public searchForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly filterStore: FilterStore,
    private readonly commodityStore: CommodityStore,
    private readonly destroy$: DestroyRef,
  ) {}

  public ngOnInit(): void {
    this.createForm();
    this.searchForm.valueChanges.pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(searchFormValue => {
        this.filterStore.updateFilter(searchFormValue);
        this.commodityStore.loadCommodities();
      });
  }

  createForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }
}

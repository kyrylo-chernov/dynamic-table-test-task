import {ChangeDetectionStrategy, Component, DestroyRef, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {CommodityStore, FilterStore} from '@services';

@Component({
  selector: 'app-commodities-filter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputNumberModule],
  templateUrl: './commodities-filter-form.component.html',
  styleUrls: ['./commodities-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesFilterFormComponent implements OnInit {
  public filterForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly filterStore: FilterStore,
    private readonly commodityStore: CommodityStore,
    private readonly destroy$: DestroyRef,
  ) {}

  public ngOnInit(): void {
    this.createForm();
    this.filterForm.valueChanges.pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(filterFormValue => {
        this.filterStore.updateFilter(filterFormValue);
        this.commodityStore.loadCommodities();
      });
  }

  createForm(): void {
    this.filterForm = this.formBuilder.group({
      category: [''],
      priceFrom: [''],
      priceTo: [9999],
    });
  }
}

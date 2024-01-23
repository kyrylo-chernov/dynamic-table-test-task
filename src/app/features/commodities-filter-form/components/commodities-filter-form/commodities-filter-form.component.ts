import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'app-commodities-filter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputNumberModule],
  templateUrl: './commodities-filter-form.component.html',
  styleUrls: ['./commodities-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommoditiesFilterFormComponent implements OnInit {
  @Output() public filterChanged = new EventEmitter<any>();
  public filterForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.filterForm = this.formBuilder.group({
      category: [''],
      priceFrom: [''],
      priceTo: [''],
    });
  }
}

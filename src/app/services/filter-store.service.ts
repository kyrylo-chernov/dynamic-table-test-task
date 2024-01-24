import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {FilterFields} from '@models';

interface FilterState extends Partial<FilterFields> {
}

@Injectable({ providedIn: 'root' })
export class FilterStore extends ComponentStore<FilterState> {
  public readonly filters$ = this.select(state => state);

  constructor() {
    super({});
  }

  public readonly updateFilter = this.updater((state, filter: Partial<FilterState>) => ({
    ...state,
    ...filter,
  }));
}

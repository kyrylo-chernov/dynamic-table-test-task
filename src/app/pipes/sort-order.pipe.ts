import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOrder',
  standalone: true
})
export class SortOrderPipe implements PipeTransform {

  public transform(value: null | undefined | string): number {
    if (!value) return 1;
    return value === 'asc' ? -1 : 1;
  }

}

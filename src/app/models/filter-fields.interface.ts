export interface FilterFields {
  category: string;
  priceFrom: number;
  priceTo: number;
  search: string;
  sortOrder?: 'asc' | 'desc';
}

export function quickSortByProperty<T>(arr: any, property: string, sortType: 'asc' | 'desc'): T[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const lesser = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (sortType === 'asc' ? arr[i][property] < pivot[property] : arr[i][property] > pivot[property]) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [
    ...quickSortByProperty(lesser, property, sortType),
    pivot, ...quickSortByProperty(greater, property, sortType)
  ];
}

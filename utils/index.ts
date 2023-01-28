import { ProductType } from 'contentful/content-models';

export type SortOrderType = 'up' | 'down';

export function productSort(
  productArray: ProductType[],
  sortOrder: SortOrderType
) {
  if (sortOrder === 'up') {
    return productArray.sort((a, b) => a.fields.price - b.fields.price);
  } else {
    return productArray.sort((a, b) => b.fields.price - a.fields.price);
  }
}

//---------------------

export function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

import { useState } from 'react';
import { ProductType } from 'contentful/content-models';

export type SortOrderType = {
  value: 'name' | 'price';
  order: 'up' | 'down';
};
interface SortProps {
  productArray: ProductType[];
  sortOrder: SortOrderType;
}

const useSort = ({ productArray, sortOrder }: SortProps) => {
  // const [sortedProduct, setSortedProduct] = useState<ProductType[]>(productArray);
  // console.log(productArray);

  // const compareFn = (a,b) => {
  //   if (sortOrder.value === 'name') {
  //     const valueA = a.name.toLowerCase()
  //     const valueB = b.name.toLowerCase()
  //   } else {
  //     const valueA = a.price;
  //     const valueB = b.price;
  //   }
  // }

  return productArray.sort((a, b) => a.fields.price - b.fields.price);
  // setSortedProduct(productArray);

  // return sortedProduct;
};

export default useSort;

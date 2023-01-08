import { Asset } from 'contentful';
import { atom, useAtom } from 'jotai';
import { nanoid } from 'nanoid/non-secure';
import { Sizes } from 'pages/shoes/size-widget';

export interface Product {
  name: string;
  slug: string;
  size: Sizes;
  price: number;
  image: Asset;
  sku: string;
  // key?: string;
  qty?: number;
}
type Contents = Product[];

export const contentsAtom = atom([] as Contents);
export const totalAtom = atom(0);

const useCart = () => {
  const [cartContents, setCartContents] = useAtom(contentsAtom);
  // const [cartTotal, setCartTotal] = useAtom(totalAtom);
  // console.log('hook', cartContents);

  const addToCart = (product: Product) => {
    // console.log('enter', product);
    const existingItem = cartContents.findIndex(
      (item) => item.sku === product.sku
    );

    if (existingItem < 0) {
      // product.key = nanoid(8);
      product.qty = 1;
      setCartContents([...cartContents, product]);
      // console.log('firstItem', cartContents);
      // setCartTotal((total) => total + product.price);
    } else {
      cartContents[existingItem].qty! += 1;
      // console.log('existingItem', cartContents);
      // setCartContents([...cartContents]);
      // setCartTotal((total) => total + product.price * product.qty!);
    }
  };

  const clearCart = () => {
    // setCartTotal(0);
    setCartContents([]);
  };

  const removeFromCart = (key: string) => {
    const removedItem = cartContents.filter((item) => item.sku === key);
    // setCartTotal((total) => total - removedItem[0].price);
    const newContents = cartContents.filter((items) => items.sku !== key);
    setCartContents(newContents);
  };

  const updateQty = (product: Product) => {
    console.log(product);
    return (product.qty! += 1);
  };

  return {
    addToCart,
    clearCart,
    removeFromCart,
  };
};

export default useCart;

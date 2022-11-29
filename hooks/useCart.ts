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
  key?: string;
}
type Contents = Product[];

export const contentsAtom = atom([] as Contents);
export const totalAtom = atom(0);

const useCart = () => {
  const [cartContents, setCartContents] = useAtom(contentsAtom);
  const [cartTotal, setCartTotal] = useAtom(totalAtom);
  // console.log('hook', cartContents);

  const addToCart = (product: Product) => {
    // console.log('add', product);
    product.key = nanoid(8);
    setCartContents([...cartContents, product]);
    setCartTotal((total) => total + product.price);
    // const total = cartContents.reduce((a,b) => {
    //   return a + b.price
    // }, 0)
  };

  const clearCart = () => {
    setCartTotal(0);
    setCartContents([]);
  };

  const removeFromCart = (key: string) => {
    const removedItem = cartContents.filter((c) => c.key === key);
    setCartTotal((total) => total - removedItem[0].price);
    const newContents = cartContents.filter((c) => c.key !== key);
    setCartContents(newContents);
  };

  return {
    addToCart,
    clearCart,
    removeFromCart,
  };
};

export default useCart;

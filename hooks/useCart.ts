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

const useCart = () => {
  const [cartContents, setCartContents] = useAtom(contentsAtom);
  // console.log('hook', cartContents);

  const addToCart = (product: Product) => {
    // console.log('add', product);
    product.key = nanoid(8);
    setCartContents([...cartContents, product]);
  };

  const clearCart = () => {
    setCartContents([]);
  };

  const removeFromCart = (key: string) => {
    const newContents = cartContents.filter((c) => c.key !== key);
    setCartContents(newContents);
  };

  return {
    cartContents,
    addToCart,
    clearCart,
    removeFromCart,
  };
};

export default useCart;

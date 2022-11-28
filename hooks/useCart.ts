import { atom, useAtom } from 'jotai';
import { Sizes } from 'pages/shoes/size-widget';

export interface Product {
  name: string;
  slug: string;
  size: Sizes;
  price: number;
  sku: string;
}
type Contents = Product[];

export const contentsAtom = atom([] as Contents);

const useCart = () => {
  const [cartContents, setCartContents] = useAtom(contentsAtom);
  console.log('hook', cartContents);

  const addToCart = (product: Product) => {
    console.log('add', product);
    setCartContents([...cartContents, product]);
  };

  const clearCart = () => {
    setCartContents([]);
  };

  const removeFromCart = () => {};

  return {
    cartContents,
    addToCart,
    clearCart,
  };
};

export default useCart;

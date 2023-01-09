import { Asset } from 'contentful';
import { atom, useAtom } from 'jotai';
import { Sizes } from 'pages/shoes/size-widget';

export interface Product {
  name: string;
  slug: string;
  size: Sizes;
  price: number;
  image: Asset;
  sku: string;
  qty?: number;
}
type Contents = Product[];

export const contentsAtom = atom([] as Contents);
export const totalAtom = atom(0);

const useCart = () => {
  const [cartContents, setCartContents] = useAtom(contentsAtom);

  const addToCart = (product: Product) => {
    const existingItem = cartContents.findIndex(
      (item) => item.sku === product.sku
    );

    if (existingItem < 0) {
      product.qty = 1;
      setCartContents([...cartContents, product]);
    } else {
      cartContents[existingItem].qty! += 1;
    }
  };

  const clearCart = () => {
    setCartContents([]);
  };

  const removeFromCart = (sku: string) => {
    const newContents = cartContents.filter((items) => items.sku !== sku);
    setCartContents(newContents);
  };

  const updateQuantity = (x: any) => {
    console.log(x);
    // return (product.qty! += 1);
  };

  return {
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCart;

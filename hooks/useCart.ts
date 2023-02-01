import { Asset } from 'contentful';
import { atom, useAtom } from 'jotai';
import { Sizes } from '@/size-widget';

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

const useCart = () => {
  const [cartContents, setCartContents] = useAtom(contentsAtom);

  const addToCart = (product: Product) => {
    const existingItem = cartContents.findIndex(
      (item) => item.sku === product.sku
    );

    if (existingItem < 0) {
      product.qty = 1;
      setCartContents(() => [...cartContents, product]);
    } else {
      cartContents[existingItem].qty! += 1;
    }
  };

  const clearCart = () => {
    setCartContents(() => []);
  };

  const removeFromCart = (sku: string) => {
    const newContents = cartContents.filter((items) => items.sku !== sku);
    setCartContents(() => newContents);
  };

  const updateQuantity = (sku: string, op: string) => {
    const currentCart = [...cartContents];
    const updateItem = currentCart.findIndex((i) => i.sku === sku);
    op === 'add'
      ? (currentCart[updateItem].qty! += 1)
      : (currentCart[updateItem].qty! -= 1);
    currentCart[updateItem].qty! > 0
      ? setCartContents(() => currentCart)
      : setCartContents(() => currentCart.filter((j) => j.sku !== sku));
  };

  return {
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCart;

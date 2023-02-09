import { render, screen } from '@testing-library/react';
import Cart from 'pages/cart/cart';
import CartItem from '@/cart-components/cart-item';
import * as item from '__mocks__/product.json';

//* have to mock <CartItem /> here and test it separately

describe('Cart', () => {
  // it('renders an empty cart', async () => {
  //   render(<Cart />);

  //   expect(await screen.findByText(/unfortunate/i));
  // });

  it('renders a cart with an item', async () => {
    render(
      <Cart>
        <CartItem key="item1" item={item} />
      </Cart>
    );
    screen.debug();

    // expect(await screen.findByText(/ordinary/i));
  });
});

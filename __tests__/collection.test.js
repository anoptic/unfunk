import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Collection from 'pages/collections/[slug]';
import * as collection from '__mocks__/collection.json';

test('renders Collection page', async () => {
  const user = userEvent.setup();
  render(<Collection collection={collection} />);

  expect(await screen.findByText(/collection/i)).toBeInTheDocument();
  expect(screen.queryByTestId('sorter')).not.toBeInTheDocument();

  const shoes = screen.getAllByRole('link');
  expect(shoes).toHaveLength(8);
  console.log(shoes[0]);

  waitFor(() => {
    user.click(screen.getByRole('combobox'));
    expect(screen.queryByTestId('sorter')).toBeInTheDocument();
  });
});

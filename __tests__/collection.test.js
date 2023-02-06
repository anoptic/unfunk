import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Collection from 'pages/collections/[slug]';
import * as collection from '__mocks__/collection.json';

test('renders Collection page', async () => {
  render(<Collection collection={collection} />);

  expect(await screen.findByText(/collection/i)).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import BlogPost from 'pages/blog/[slug]';
import * as blogPost from '__mocks__/blog.json';

test('renders Blog page', async () => {
  render(<BlogPost blogPost={blogPost} />);

  expect(await screen.findByText(/unfunktion/i)).toBeInTheDocument();
});

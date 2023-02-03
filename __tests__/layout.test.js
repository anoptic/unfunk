import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Layout from '@/layout';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Layout', () => {
  it('renders the app layout', async () => {
    render(<Layout />);
    expect(await screen.findByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('provides access to navigation', async () => {
    const user = userEvent.setup();
    render(<Layout />);

    expect(screen.getByRole('button', { name: /about/i })).toHaveAttribute(
      'data-state',
      'closed'
    );

    user.hover(screen.getByRole('button', { name: /about/i }));
    waitFor(() => {
      expect(screen.getByRole('button', { name: /about/i })).toHaveAttribute(
        'data-state',
        'open'
      );
    });

    user.unhover(screen.getByRole('button', { name: /about/i }));
    waitFor(() => {
      expect(screen.getByRole('button', { name: /about/i })).toHaveAttribute(
        'data-state',
        'closed'
      );
    });
  });
});

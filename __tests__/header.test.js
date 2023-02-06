import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '@/header/header';

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

describe('Header', () => {
  it('renders <Header> component', async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(await screen.findByLabelText(/unfunk logo/i)).toBeInTheDocument();

    const navLinks = screen
      .getAllByRole('button')
      .filter((a) => a.className === 'trigger');
    expect(navLinks).toHaveLength(3);

    navLinks.forEach((navBtn) => {
      expect(navBtn).toHaveAttribute('data-state', 'closed');
      waitFor(() => {
        user.hover(navBtn);
        expect(navBtn).toHaveAttribute('data-state', 'open');
      });
      waitFor(() => {
        user.unhover(navBtn);
        expect(navBtn).toHaveAttribute('data-state', 'closed');
      });
    });
  });
});

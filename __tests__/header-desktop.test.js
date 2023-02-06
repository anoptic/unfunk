import { render, screen, waitFor } from '@testing-library/react';
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

describe('Desktop Header', () => {
  it('renders <HeaderDesktop> component', async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(await screen.findByLabelText(/logo/i)).toBeInTheDocument();
    expect(screen.queryByTestId('viewport')).not.toBeInTheDocument();

    const navLinks = screen
      .getAllByRole('button')
      .filter((a) => a.className === 'trigger');
    expect(navLinks).toHaveLength(3);

    navLinks.forEach((navBtn) => {
      expect(navBtn).toHaveAttribute('data-state', 'closed');
      waitFor(() => {
        user.hover(navBtn);
        expect(navBtn).toHaveAttribute('data-state', 'open');
        expect(screen.getByTestId('viewport')).toBeVisible();
      });
      waitFor(() => {
        user.unhover(navBtn);
        expect(navBtn).toHaveAttribute('data-state', 'closed');
        expect(screen.queryByTestId('viewport')).not.toBeInTheDocument();
      });
    });

    expect(screen.getByLabelText(/bag/i)).toBeInTheDocument();
  });
});

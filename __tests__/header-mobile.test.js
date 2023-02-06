import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '@/header/header';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Mobile Header', () => {
  it('renders <HeaderMobile> component', async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(await screen.findByLabelText(/logo/i)).toBeInTheDocument();
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    expect(screen.getByLabelText(/menu/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/bag/i)).toBeInTheDocument();

    waitFor(() => {
      user.click(screen.getByLabelText(/menu/i));
      expect(screen.getByTestId('modal')).toBeVisible();
    });
    waitFor(() => {
      user.click(screen.getByLabelText(/menu/i));
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });
});

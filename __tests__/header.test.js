import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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
  it('renders page header', () => {
    render(<Header />);
  });
  screen.debug();
});

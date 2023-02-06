import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import Home from 'pages/index';
import * as homePage from '__mocks__/homepage.json';

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

describe('Home', () => {
  it('renders Home page', async () => {
    // const user = userEvent.setup();
    render(<Home homePage={homePage} />);

    const homepageLinks = await screen.findAllByRole('link');
    expect(homepageLinks).toHaveLength(6);

    // user.click(screen.getByRole('link', { name: /event/i }));
  });
});

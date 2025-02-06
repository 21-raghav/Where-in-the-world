import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

// Mocking window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('renders header and button', () => {
  render(<Header />);
  expect(screen.getByText(/Where in the world\?/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Toggle theme/i })).toBeInTheDocument();
});

test('initial theme state is set correctly', () => {
  render(<Header />);
  const initialTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  expect(document.body.className).toBe(initialTheme);
});

test('toggles theme on button click', () => {
  render(<Header />);
  const button = screen.getByRole('button', { name: /Toggle theme/i });
  
  // Click to toggle theme
  fireEvent.click(button);
  const newTheme = localStorage.getItem('theme');
  expect(document.body.className).toBe(newTheme);

  // Click again to revert theme
  fireEvent.click(button);
  const revertedTheme = localStorage.getItem('theme');
  expect(document.body.className).toBe(revertedTheme);
});

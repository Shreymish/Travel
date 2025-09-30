import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders Home and Main sections', () => {
  render(<App />);
  const home = screen.getByRole('heading', { level: 2, name: /home/i });
  const main = screen.getByRole('heading', { level: 2, name: /main/i });
  expect(home).toBeDefined();
  expect(main).toBeDefined();
});

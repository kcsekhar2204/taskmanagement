import { render, screen } from '@testing-library/react';
import App from './App';

test('is App rendering', () => {
  render(<App />);
  const linkElement = screen.getByText(/TASK SHEET/i);
  expect(linkElement).toBeInTheDocument();
});

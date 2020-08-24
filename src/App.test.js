import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component with my scoreboard', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My scoreboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders scoreboards', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My scoreboard/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders acroyoga site link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ACRO POSE GENERATOR/i);
  expect(linkElement).toBeInTheDocument();
});

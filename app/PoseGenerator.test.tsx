import React from 'react';
import { render, screen } from '@testing-library/react';
import PoseGenerator from './PoseGenerator';

test('renders acroyoga site link', () => {
  render(<PoseGenerator />);
  const linkElement = screen.getByText(/ACRO POSE GENERATOR/i);
  expect(linkElement).toBeInTheDocument();
});

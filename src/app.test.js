import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './app';

describe('Tests for the App component', () => {
  it('renders all of its child components', () => {
    render(<App />);

    const header = screen.getByTestId('header');
    const form = screen.getByTestId('form');
    const results = screen.getByTestId('results');
    const footer = screen.getByTestId('footer');
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(results).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  })
});

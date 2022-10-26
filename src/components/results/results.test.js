import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Results from './index';

describe('Tests for the Results component', () => {
  it('renders the data prop correctly', () => {
    const data = {
      name: 'Bob',
    };
    render(<Results data={data} />);
    const resultsPre = screen.getByTestId('results-pre');
    expect(resultsPre).toHaveTextContent('Bob');
  });

  it('renders no data correctly when there is no data', () => {
    render(<Results />);
    const resultsPre = screen.getByTestId('results-pre');
    expect(resultsPre).toHaveTextContent('');
  });
});

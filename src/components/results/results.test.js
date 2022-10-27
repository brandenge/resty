import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Results from './index';

describe('Tests for the Results component', () => {
  it('renders the data prop correctly', () => {
    const response = {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        name: 'Bob',
      },
    };
    render(<Results response={response} />);
    const resultsHeaders = screen.getByTestId('results-headers');
    const resultsBody = screen.getByTestId('results-body');
    expect(resultsHeaders).toHaveTextContent('application/json');
    expect(resultsBody).toHaveTextContent('Bob');
  });

  it('renders no data correctly when there is no data', () => {
    render(<Results />);
    const resultsHeaders = screen.getByTestId('results-headers');
    const resultsBody = screen.getByTestId('results-body');
    expect(resultsHeaders).toHaveTextContent('');
    expect(resultsBody).toHaveTextContent('');
  });
});

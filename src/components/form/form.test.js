import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index';

describe('Tests the Form component', () => {
  it('calls the handleApiCall function', () => {
    const handleApiCall = jest.fn();
    const requestParams = {
      url: 'http://fakethings.com/1',
      method: 'get',
    };
    render(<Form handleApiCall={handleApiCall} requestParams={requestParams} />);

    const button = screen.getByText('GO!');
    fireEvent.click(button);

    expect(handleApiCall).toHaveBeenCalled();
  });
});

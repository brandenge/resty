import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index';

describe('Tests the Form component', () => {
  const handleApiCall = jest.fn();
  const requestParams = {
    url: 'http://fakethings.com/1',
    method: 'GET',
    body: {},
  };
  it('calls the handleApiCall function', () => {
    render(<Form handleApiCall={handleApiCall} requestParams={requestParams} />);

    const button = screen.getByText('GO!');
    fireEvent.click(button);

    expect(handleApiCall).toHaveBeenCalled();
  });

  it('correctly adds an outline to only the button for the selected method', () => {
    render(<Form handleApiCall={handleApiCall} requestParams={requestParams} />);

    const getButton = screen.getByText('GET');
    const postButton = screen.getByText('POST');
    const putButton = screen.getByText('PUT');
    const deleteButton = screen.getByText('DELETE');
    fireEvent.click(getButton);
    expect(getButton.style.outline).toEqual('5px solid #0f1359');
    expect(postButton.style.outline).toEqual('');
    expect(putButton.style.outline).toEqual('');
    expect(deleteButton.style.outline).toEqual('');
    fireEvent.click(postButton);
    expect(getButton.style.outline).toEqual('');
    expect(postButton.style.outline).toEqual('5px solid #0f1359');
    expect(putButton.style.outline).toEqual('');
    expect(deleteButton.style.outline).toEqual('');
    fireEvent.click(putButton);
    expect(getButton.style.outline).toEqual('');
    expect(postButton.style.outline).toEqual('');
    expect(putButton.style.outline).toEqual('5px solid #0f1359');
    expect(deleteButton.style.outline).toEqual('');
    fireEvent.click(deleteButton);
    expect(getButton.style.outline).toEqual('');
    expect(postButton.style.outline).toEqual('');
    expect(putButton.style.outline).toEqual('');
    expect(deleteButton.style.outline).toEqual('5px solid #0f1359');
  });

  it('correctly updates the request method and URL display', () => {
    render(<Form handleApiCall={handleApiCall} requestParams={requestParams} />);
    const urlInput = screen.getByTestId('url');
    fireEvent.change(urlInput, { target: { value: 'Testing the URL'} });
    expect(urlInput.value).toEqual('Testing the URL');
  });
});

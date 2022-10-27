import React from 'react';
import { useState } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [response, setResponse] = useState({});
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    const data = {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        count: 2,
        results: [
          {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ],
      },
    };
    setResponse(data);
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header data-testid='header' />
      <Form data-testid='form' handleApiCall={callApi} requestParams={requestParams} />
      <Results data-testid='results' response={response} />
      <Footer data-testid='footer' />
    </>
  );
}

export default App;

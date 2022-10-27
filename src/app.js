import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [response, setResponse] = useState({});
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {

  });

  const callApi = async (requestParams) => {
    const config = {
      method: requestParams.method,
      url: requestParams.url,
      data: requestParams.body,
    };
    const response = await axios(config);
    setResponse(response);
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

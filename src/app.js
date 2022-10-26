import React from 'react';
import { useState } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({ url: null, method: null });

  const callApi = (requestParams) => {
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} requestParams={requestParams} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;

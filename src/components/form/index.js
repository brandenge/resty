import { useState } from 'react';

import './form.scss';

export default function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall({ url, method });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span id='get' onClick={(e) => setMethod('get')}>GET</span>
          <span id='post' onClick={(e) => setMethod('post')}>POST</span>
          <span id='put' onClick={(e) => setMethod('put')}>PUT</span>
          <span id='delete' onClick={(e) => setMethod('delete')}>DELETE</span>
        </label>
      </form>
      <div>Request Method: {props.requestParams.method}</div>
      <div>URL: {props.requestParams.url}</div>
    </>
  );
}

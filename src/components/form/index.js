import { useState } from 'react';

import './form.scss';

export default function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall({ url, method, body });
  }

  const methodSelector = (e) => {
    setMethod(e.target.id);
    e.target.style.outline = '5px solid #0f1359';
    if (selectedMethod) selectedMethod.style.outline = '';
    setSelectedMethod(e.target);
  }

  return (
    <>
      <form data-testid='form' onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input data-testid='url' name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type='submit' onSubmit={(e) => handleSubmit(e)}>GO!</button>
        </label>
        <label className='methods'>
          <span id='get' onClick={methodSelector}>GET</span>
          <span id='post' onClick={methodSelector}>POST</span>
          <span id='put' onClick={methodSelector}>PUT</span>
          <span id='delete' onClick={methodSelector}>DELETE</span>
        </label>
        <label>
          <span>Request Body: </span>
          <textarea onChange={(e) => setBody(e.target.value)}></textarea>
        </label>
      </form>
      <div>Request Method: {method}</div>
      <div>URL: {url}</div>
    </>
  );
}

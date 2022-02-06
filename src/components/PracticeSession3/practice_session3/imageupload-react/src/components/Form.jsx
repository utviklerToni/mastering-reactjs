import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import ProgressBar from '../hooks/ProgressBar';

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageTypes = ['image/png', 'image/jpeg', 'image/webp'];

  const changeHandler = (e) => {
    // console.log('selected/canceled');

    let selected = e.target.files[0];
    // console.log(selected);

    if (selected && imageTypes.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Error: Please select image file of format(png, jpeg, webp)');
    }
  };

  return (
    <form>
      <input type='file' onChange={changeHandler} />
      <span>+</span>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}

        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Form;

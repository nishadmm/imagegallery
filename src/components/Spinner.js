import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className=' d-flex justify-content-center align-items-center '>
      <img src={spinner} alt='' />
    </div>
  );
};

export default Spinner;

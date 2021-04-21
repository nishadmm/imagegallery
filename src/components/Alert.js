import React, { useContext } from 'react';
import ImageContext from '../context/context';

const Alert = () => {
  const imageContext = useContext(ImageContext);

  return (
    <div className='alert alert-danger alert-dismissible fade show'>
      Please Enter Something...
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        style={{ boxShadow: "none" }}
        onClick={imageContext.removeAlert}
      ></button>
    </div>
  );
};

export default Alert;

import React, { useContext } from 'react';
import ImageContext from '../context/context';
import Photo from './Photo';
import Spinner from './Spinner';

const Photos = () => {
  const imageContext = useContext(ImageContext);
  const { images, spinner } = imageContext;

  if (spinner) {
    return <Spinner />;
  }
  return (
    <>
      {images.length > 0 ? (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 m-4'>
          {images.map((image) => <Photo key={image.id} image={image} />)}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh", fontFamily: "monospace" }} >
          <h1>No Images Found...</h1>
        </div>
      )
      }
    </>
  );
};

export default Photos;

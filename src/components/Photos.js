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
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 m-4'>
      {images.length > 0 &&
        images.map((image) => <Photo key={image.id} image={image} />)}
    </div>
  );
};

export default Photos;

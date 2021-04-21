import React from 'react';
import PropTypes from 'prop-types';

const PhotoDetails = ({ image }) => {
  let tag1, tag2;
  const getTag1 = () => {
    let commaIndex = image.tags.indexOf(',');
    tag1 = image.tags.slice(0, commaIndex);
    let secondCommaIndex = image.tags.indexOf(',', commaIndex + 1);
    tag2 = image.tags.slice(commaIndex + 2, secondCommaIndex);
  };
  getTag1();
  return (
    <>
      <div className='upper-part'>
        <i className='fas fa-eye'></i> {image.views}
      </div>
      <div className='below-part'>
        <div>
          <span> {tag1} </span>
          <span> {tag2} </span>
        </div>
        <div>
          <span>
            <i className='far fa-thumbs-up'></i> {image.likes}
          </span>
          <span>
            <i className='far fa-comment'></i> {image.comments}
          </span>
        </div>
        {/* <span>
          <i className='far fa-arrow-alt-circle-down'></i> {image.downloads}
        </span> */}
      </div>
    </>
  );
};

PhotoDetails.propTypes = {
  image: PropTypes.object.isRequired,
};

export default PhotoDetails;

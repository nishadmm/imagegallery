import React from 'react'
import PropTypes from 'prop-types'
import PhotoDetails from './PhotoDetails';

const Photo = ({ image }) => {
  return (
    <a href={image.pageURL} target="_blank" rel="noreferrer" className="col image"  >
      <img src={image.largeImageURL} alt="" />
      <div className="img-details" >
        < PhotoDetails image={image} />
      </div>
    </a>
  )
}

Photo.propTypes = {
  image: PropTypes.object.isRequired
}

export default Photo

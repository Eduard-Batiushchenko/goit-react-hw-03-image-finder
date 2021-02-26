import React from 'react';
import PropTypes from 'prop-types';
import './_ImageGalleryItem.scss';

const ImageGalleryItem = ({ webformatURL, tags, id, handleImage }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => handleImage(id)}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

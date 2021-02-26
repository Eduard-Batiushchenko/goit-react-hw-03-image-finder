import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import './_ImageGallery.scss';

const ImageGallery = ({ gallery, handleImage }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(item => {
        return (
          <ImageGalleryItem key={item.id} handleImage={handleImage} {...item} />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  handleImage: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;

import React from 'react';
import ImageGalleryItem from '../Components/ImageGalleryItem/ImageGalleryItem';
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

export default ImageGallery;

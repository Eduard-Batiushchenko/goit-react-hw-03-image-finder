import React from 'react';
import './_ImageGalleryItem.scss';

const ImageGalleryItem = ({ previewURL, tags, id, handleImage }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => handleImage(id)}>
      <img src={previewURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

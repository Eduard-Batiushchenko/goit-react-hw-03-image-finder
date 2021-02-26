import React from 'react';
import './_Button.scss';

const Button = ({ loadMoreGallery }) => {
  return (
    <button className="Button" type="button" onClick={loadMoreGallery}>
      Load more
    </button>
  );
};

export default Button;

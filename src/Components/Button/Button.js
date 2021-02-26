import React from 'react';
import PropTypes from 'prop-types';
import './_Button.scss';

const Button = ({ loadMoreGallery }) => {
  return (
    <button className="Button" type="button" onClick={loadMoreGallery}>
      Load more
    </button>
  );
};
Button.propTypes = {
  loadMoreGallery: PropTypes.func.isRequired,
};
export default Button;

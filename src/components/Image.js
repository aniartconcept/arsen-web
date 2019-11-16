import React from 'react';

const Image = ({ src, alt = '' }) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;

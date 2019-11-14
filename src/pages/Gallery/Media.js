import React from 'react';
import data from 'db/gallery-media-db';
import ArticleMedia from 'components/ArticleMedia';

const Media = () => {
  return (
    <div className="gallery-content-container">
      {data.map((item, index) => (
        <ArticleMedia data={item} key={index} />
      ))}
    </div>
  );
};

export default Media;

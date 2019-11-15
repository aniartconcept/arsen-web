import React from 'react';
import data from 'db/gallery-videos-db';
import ArticleMedia from 'components/ArticleMedia';

const Videos = () => {
  return (
    <div className="gallery-content-container">
      {data.map((item, index) => (
        <ArticleMedia data={item} key={index} />
      ))}
    </div>
  );
};

export default Videos;

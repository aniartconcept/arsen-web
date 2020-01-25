import React from 'react';
import data from 'db/library-media-db';
import ArticleMedia from 'components/ArticleMedia';

const Media = () => {
  return (
    <div className="library-content-container">
      {data.map((item, index) => (
        <ArticleMedia data={item} key={index} />
      ))}
    </div>
  );
};

export default Media;

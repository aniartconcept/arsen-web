import React from 'react';
import data from 'db/gallery-events-db';
import ArticleMedia from 'components/ArticleMedia';

const Events = () => {
  return (
    <div className="gallery-content-container">
      {data.map((item, index) => (
        <ArticleMedia data={item} key={index} />
      ))}
    </div>
  );
};

export default Events;

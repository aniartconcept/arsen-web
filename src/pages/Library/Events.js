import React, { useEffect, useState } from 'react';

import ArticleMedia from 'components/ArticleMedia';

const Events = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db/library-events.json')
      .then(res => {
        return res.json();
      })
      .then(setData);
  }, []);
  return (
    <div className="library-content-container fadeIn">
      {data.map((item, index) => (
        <ArticleMedia data={item} key={index} />
      ))}
    </div>
  );
};

export default Events;

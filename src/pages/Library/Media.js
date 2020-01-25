import React, { useEffect, useState } from 'react';
// import data from 'db/library-media-db';
import ArticleMedia from 'components/ArticleMedia';

const Media = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db/library-media.json')
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

export default Media;

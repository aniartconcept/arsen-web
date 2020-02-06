import React, { useEffect, useState, useCallback } from 'react';

import ArticleMedia from 'components/ArticleMedia';
import MediaModal from 'components/MediaModal';

const Events = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db/library-events.json')
      .then(res => {
        return res.json();
      })
      .then(setData);
  }, []);
  const toggleModal = useCallback((arr = []) => {
    setIsVisible(prev => !prev);
    setCurrent(arr);
  }, []);
  return (
    <div className="library-content-container fadeIn">
      {data.map((item, index) => (
        <ArticleMedia data={item} key={index} onClick={toggleModal} />
      ))}

      <MediaModal items={current} toggle={toggleModal} isVisible={isVisible}></MediaModal>
    </div>
  );
};

export default Events;

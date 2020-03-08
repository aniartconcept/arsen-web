import React, { useEffect, useState, useCallback } from 'react';

import ArticleHighlights from 'components/ArticleHighlights';
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
    if (arr.length) {
      setCurrent(arr);
    } else {
      setTimeout(() => {
        setCurrent([]);
      }, 2001);
    }
  }, []);
  return (
    <>
      <div className={`library-content-container fadeIn ${current.length ? 'pointer-events-none' : ''}`}>
        {data.map((item, index) => (
          <ArticleHighlights data={item} key={index} onClick={toggleModal} />
        ))}
      </div>
      <MediaModal items={current} toggle={toggleModal} isVisible={isVisible}></MediaModal>
    </>
  );
};

export default Events;

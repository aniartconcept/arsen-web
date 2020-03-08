import React, { useState, useEffect } from 'react';
import i18n from 'locale/i18n';

const Recordings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db/library-recordings.json')
      .then(res => {
        return res.json();
      })
      .then(setData);
  }, []);

  return (
    <div className="recordings-content-container fadeIn">
      <ul className="types-filter"></ul>
      <ul className="recordings">
        {data.map(item => (
          <li key={item.id} className="recording-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="line-recordings">
                <i className={`icon icon-${item.type.toLowerCase()}`}></i>
              </div>
              <div className="recording-item-inner">
                {!!item.thumb && (
                  <div
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.thumb})` }}
                    className="recording-item-thumb"
                  />
                )}
                <div className="recording-item-content">
                  <div className="item-name">{item.name[i18n.language]}</div>
                  <div className="item-desc" dangerouslySetInnerHTML={{ __html: item.desc[i18n.language] }}></div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recordings;

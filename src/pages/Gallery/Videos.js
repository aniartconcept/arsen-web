import React from 'react';

import data from 'db/gallery-videos-db';
import i18n from 'locale/i18n';



const Videos = () => {
  return (
      <div className="videos-content-container">
        <ul className="types-filter">
        </ul>
        <ul className="recordings">
          {data.map(item => (
              <li key={item.id} className="recording-item">
                        <div className="line-recordings"></div>
                        <div className="item-name">{item.name[i18n.language]}</div>
                        <div className="item-desc">{item.desc[i18n.language]}</div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Videos;

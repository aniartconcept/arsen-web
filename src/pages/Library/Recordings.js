import React from 'react';

import data from 'db/library-recordings-db';
import i18n from 'locale/i18n';

const Recordings = () => {
  return (
    <div className="recordings-content-container">
      <ul className="types-filter"></ul>
      <ul className="recordings">
        {data.map(item => (
          <li key={item.id} className="recording-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="line-recordings">
                <i className={`icon icon-${item.type.toLowerCase()}`}></i>
              </div>
              <div className="item-name">{item.name[i18n.language]}</div>
              <div className="item-desc">{item.desc[i18n.language]}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recordings;

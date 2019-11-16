import React, { useState, useCallback, useEffect } from 'react';
import data, { recordingTypes } from 'db/recordings-db';
import moment from 'moment';
import i18n from 'locale/i18n';
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from 'react-scroll';
const Recording = () => {
  const { t } = useTranslation();
  const [type, setType] = useState(recordingTypes[0]);

  useEffect(() => {
    const header = document.querySelector('.page-header');
    scroll.scrollTo(window.innerHeight - header.offsetHeight);
  }, [type]);

  const filteredData = useCallback(() => data.filter(i => i.type === type), [type]);

  return (
    <div className="recordings-content-container">
      <ul className="types-filter">
        {recordingTypes.map(i => (
          <li key={i}>
            <button className={`unstyled ${i === type ? 'active' : ''}`} onClick={() => setType(i)}>
              {t(i)}
            </button>
          </li>
        ))}
      </ul>
      <ul className="recordings">
        {filteredData().map(item => (
          <li key={item.id} className="recording-item">
            <div className="item-year">{moment(item.year).format('YYYY')}</div>
            <div className="item-name">{item.name[i18n.language]}</div>
            <div className="item-desc">{item.desc[i18n.language]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recording;

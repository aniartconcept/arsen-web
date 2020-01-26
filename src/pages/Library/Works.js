import React, { useState, useMemo, useEffect } from 'react';

import moment from 'moment';
import i18n from 'locale/i18n';
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from 'react-scroll';

const workTypes = ['ORCHESTRA', 'ENSAMBLE', 'CHAMBER', 'CYCLES', 'SOLO', 'OTHER'];

const Works = () => {
  const { t } = useTranslation();
  const [type, setType] = useState(workTypes[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const header = document.querySelector('.page-header');
    scroll.scrollTo(window.innerHeight - header.offsetHeight + 1);
  }, [type]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db/library-works.json')
      .then(res => {
        return res.json();
      })
      .then(setData);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(i => i.type === type);
  }, [data, type]);

  return (
    <div className="recordings-content-container fadeIn">
      <ul className="types-filter">
        {workTypes.map(i => (
          <li key={i}>
            <button className={`unstyled ${i === type ? 'active' : ''}`} onClick={() => setType(i)}>
              {t(i)}
            </button>
          </li>
        ))}
      </ul>
      <ul className="recordings">
        {filteredData.map(item => (
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

export default Works;

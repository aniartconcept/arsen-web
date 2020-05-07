import React from 'react';
import i18n from 'locale/i18n';
import { formatDate } from 'services/formatDate';
import Image from './Image';
import {useTranslation} from "react-i18next";

const ArticleMedia = ({ data, onClick }) => {
    const { t } = useTranslation();
    const handleClick = e => {
    if (onClick && data.images && data.images.length) {
      e.preventDefault();
      onClick(data.images);
    }
  };
  return (
    <a href={data.url} target="_blank" className="slide-article media-article" rel="noopener noreferrer">
      <h5 className="article-title-line-media"><i className={`icon icon-${data.type.toLowerCase()}`}></i>
      </h5>
      <div className="article-thumb-media" onClick={handleClick}>
        <Image src={process.env.PUBLIC_URL + data.thumb} alt="" />
      </div>
      <div className="article-body-media">
        <h5 className="article-title-media"><span>{data.title[i18n.language]}</span></h5>
         <span className="article-desc">Interview in Bravo.am</span>
          <p className="article-desc" dangerouslySetInnerHTML={{ __html: data.desc[i18n.language] }}></p>
          <div className="article-action-wrapper-media">
              <a href={data.url} className="article-action" target="_blank" rel="noopener noreferrer">
                  {t('DETAILS')}
              </a>
          </div>

      </div>
    </a>
  );
};

export default React.memo(ArticleMedia);

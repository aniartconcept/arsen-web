import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const GalleryNav = () => {
  const galleryNav = useRef(null);
  const { t } = useTranslation();
    useEffect(() => {
    const setClass = e => {
      const header = document.querySelector('.page-header');
      const { offsetTop, offsetHeight } = galleryNav.current;
      if (offsetTop - window.innerHeight + offsetHeight > 0) {
        header.classList.add('pined');
      } else {
        header.classList.remove('pined');
      }
    };
    document.addEventListener('scroll', setClass);
    return () => {
      document.removeEventListener('scroll', setClass);
    };
  }, []);
  return (
    <ul className="gallery-nav" ref={galleryNav}>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/videos">
            {t('RECORDINGS')}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/recording">
            {t('WORKS')}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/media">
            {t('MEDIA')}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/events">
            {t('EVENTS')}
        </NavLink>
      </li>
    </ul>
  );
};

export default GalleryNav;

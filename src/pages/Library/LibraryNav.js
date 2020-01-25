import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LibraryNav = () => {
  const libraryNav = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    const setClass = e => {
      const header = document.querySelector('.page-header');
      const { offsetTop, offsetHeight } = libraryNav.current;
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
    <ul className="library-nav" ref={libraryNav}>
      <li className="nav-item">
        <NavLink className="nav-link" to="/library/recordings">
          {t('RECORDINGS')}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/library/works">
          {t('WORKS')}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/library/media">
          {t('MEDIA')}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/library/events">
          {t('EVENTS')}
        </NavLink>
      </li>
    </ul>
  );
};

export default LibraryNav;

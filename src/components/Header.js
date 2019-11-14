import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { useTranslation } from 'react-i18next';

import LangSwitch from './LangSwitch';
import SocialLinks from './SocialLinks';

const Header = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.classList.add('menu-opened');
    } else {
      document.body.classList.remove('menu-opened');
    }
  }, [show]);

  return (
    <header className={`page-header`}>
      <div className="header-container">
        <h1>
          <Link to="/" onClick={() => setShow(false)}>
            Arsen Babajanyan
          </Link>
        </h1>
        <button className={`header-menu-toggle unstyled ${show ? 'in' : ''}`} onClick={() => setShow(!show)} />
      </div>
      <CSSTransition in={show} timeout={1000} unmountOnExit classNames="fade">
        <div className="header-menu">
          <LangSwitch />
          <ul className="header-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => setShow(false)} exact>
                {t('HEADER_HOME')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/biography" onClick={() => setShow(false)}>
                {t('BIOGRAPHY')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery" onClick={() => setShow(false)}>
                {t('GALLERY')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/recording" onClick={() => setShow(false)}>
                Recording
              </NavLink>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </CSSTransition>
    </header>
  );
};

export default Header;

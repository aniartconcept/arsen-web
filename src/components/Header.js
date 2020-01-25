import React, { useState, useEffect, useCallback } from 'react';
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

  const closeMenu = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <header className={`page-header`}>
      <div className="header-container">
        <h1>
          <Link to="/" onClick={closeMenu}>
            {t('ARSEN_BABAJANYAN')}
          </Link>
        </h1>
        <button className={`header-menu-toggle unstyled ${show ? 'in' : ''}`} onClick={() => setShow(!show)} />
      </div>
      <CSSTransition in={show} timeout={{ enter: 2200, exit: 2200 }} unmountOnExit classNames="fade">
        <div className="header-menu">
          <div className="header-menu-backdrop" onClick={closeMenu} />
          <LangSwitch />
          <ul className="header-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu} exact>
                {t('HEADER_HOME')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/biography" onClick={closeMenu}>
                {t('BIOGRAPHY')}
              </NavLink>
            </li>
            <li className="nav-item has-subnav">
              <NavLink className="nav-link" to="/library" onClick={closeMenu}>
                {t('LIBRARY')}
              </NavLink>
              <ul className="header-sub-nav">
                <li>
                  <NavLink className="nav-link" to="/library/recordings" onClick={closeMenu}>
                    {t('RECORDINGS')}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/library/works" onClick={closeMenu}>
                    {t('WORKS')}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/library/media" onClick={closeMenu}>
                    {t('MEDIA')}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/library/events" onClick={closeMenu}>
                    {t('EVENTS')}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts" onClick={closeMenu}>
                {t('CONTACTS')}
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

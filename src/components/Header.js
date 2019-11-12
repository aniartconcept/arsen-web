import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { useTranslation } from 'react-i18next';

import LangSwitch from './LangSwitch';
import SocialLinks from './SocialLinks';

const Header = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <header className="page-header">
      <div className="header-container">
        <h1>
          <Link className="nav-link" to="/" onClick={() => setShow(false)}>
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
              <Link className="nav-link" to="/" onClick={() => setShow(false)}>
                {t('HEADER_HOME')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/biography" onClick={() => setShow(false)}>
                Biography
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={() => setShow(false)}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recording" onClick={() => setShow(false)}>
                Recording
              </Link>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </CSSTransition>
    </header>
  );
};

export default Header;

import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const GalleryNav = () => {
  const galleryNav = useRef(null);
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
          Videos
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/recording">
          Recording
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/media">
          Media
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery/events">
          Events
        </NavLink>
      </li>
    </ul>
  );
};

export default GalleryNav;

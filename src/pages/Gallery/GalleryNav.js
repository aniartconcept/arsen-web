import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryNav = () => {
  return (
    <ul className="gallery-nav">
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

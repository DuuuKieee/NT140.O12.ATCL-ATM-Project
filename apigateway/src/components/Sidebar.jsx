import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="Menu">
        <li className="items">
          <Link to="/products" className="tagLink">Thông báo</Link>
        </li>
        <li className="items">
          <Link to="/profiles" className="tagLink">Trang cá nhân</Link>
        </li>
        <li className="items">
          <Link to="/secrect" className="tagLink">Owner Permision</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import Sidebar from './Sidebar';
import Public from './Public';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Public />
    </div>
  );
};

export default Layout;
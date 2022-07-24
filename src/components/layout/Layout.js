import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;

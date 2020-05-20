import React from 'react';
import './header.css';

function Header() {
  return (
    <header data-test="headerComponent">
      <div className="wraper" data-test="wraper">
        <div className="logo" data-test="logo">
          <h3 className="title" data-test="title">
            Logo
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;

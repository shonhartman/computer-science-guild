import React from 'react';
import logo from '../logo.svg';


const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Computer Science Guild
      </p>
      <a
        className="App-link"
        href="https://www.notion.so/bighuman/Computer-Science-Guild-96cf6cd89c8a4f6ebe126c9f47f7bab8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Computer Science
      </a>
    </header>
  );
};

export default Header;
// src/components/LandingPage.js

import React from 'react';

const Header = () => {
  return (
    <div>
        <header>
            <img src="logo192.png" className="header-logo" alt="Metaverse DAO logo" />
            <nav>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>How it Works</a></li>
                <li><a href='#'>Tokenomics</a></li>
                <li><a href='#'>Roadmap</a></li>
                <li><a href='#'>Verification Audit</a></li>
                <li><a href='#'>Staking</a></li>
            </ul>
            </nav>
            <button>Launch App</button>
      </header>
    </div>
  );
};

export default Header;

import React from 'react';
import './LandingPage.css'; 

const AboutUs = () => {
  return (
    <div className="dao-section">
        <div className='whole-content'>
            <div className='content-right'>
            <img src="logo192.png" alt="Metaverse DAO logo" />
            </div>
            <div className='content-left'>
                <h2>DAO Responsibility & Transparency</h2>
                <h3>What is Metaverse DAO?</h3>
                <p>Metaverse DAO is a revolutionary Farm-as-a-Service project that operates on the Ethereum Chain. The project is designed to allow users to passively earn rewards from yield farming across various networks.</p>
                <p>The project is designed in a way that allows users to passively earn yield in the form of reflections from a token tax that will also fund the project’s treasury wallet, which is then used to generate yield across different blockchains.</p>
                <p>$MADO will be the reserve currency on Ethereum. In order to maintain price stability Metaverse DAO will use the Reserve Currency algorithm and will also be supported by other decentralized assets.</p>
                <p>Metaverse DAO is focused on long term and profitable treasury fund allocation. Our mission is to use treasury funds allocated from users towards NFT Game development, 3D & Metaverse VR Games, along with investing directly into teams and corporations that have a long term vision on Metaverse games and P2E! This will be achieved through community voting as per majority decisions made by Metaverses DAO members.</p>
            <div>
                <button>Buy $MDAO</button>
                <button>Chart</button>
                <button>Governance</button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default AboutUs;

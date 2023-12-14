import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">

      <div className='whole-content'>
        <div className='content-left'>
          <main>
            <h1>Metaverse DAO Lets build the future</h1>
            <p>DeFi 3.0 FaaS project - that stands for Farmers-as-a-Service</p>
            <p>30% ETH rewards claimable on our dApp</p>
            <p>Community decides how the treasury will be used: Low, Medium, High Risk APY</p>
            <p>A percentage of each transaction allocated towards treasury</p>
            <p>OFFICIAL CONTRACT: 0x35e1e1b6c9fe13b7f7f17</p>
            <p>Official TG admin account: @JamesMDAO</p>
          </main>
          <div>
            <button>Buy $MDAO</button>
            <button>Chart</button>
            <button>Governance</button>

          </div>
        </div>
        <div className='content-right'>
          <img src="logo192.png" alt="Metaverse DAO logo" />
        </div>
      </div>

    </div>

  );
};

export default LandingPage;

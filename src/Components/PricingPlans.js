import React, { useState } from 'react';
import './PricingPlans.css';

const Pricing = () => {
    const [active,setActive] = useState(0);
  const handleToggle = (index) => {
    setActive(index);
  }
  return (
    <div className="pricing-container inter">
      <div className="toggle-buttons">
        <div className='double'>
        <button 
            onClick={() => handleToggle(0)} 
            className={`toggle-button ${active === 0 ? 'selected' : ''}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => handleToggle(1)} 
            className={`toggle-button ${active === 1 ? 'selected' : ''}`}
          >
            Annual
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">

        {/* Trial Card */}
        <div className="pricing-card">
          <h3>Trial</h3>
          <h4>Try now</h4>
          <p>Get personalized template</p>
          <ul className="features-list">
            <li><img src="/check-circle.png" alt="Check" /> 25+ data sources</li>
            <li><img src="/check-circle.png" alt="Check" /> GPT4, LinkedIn and others</li>
            <li><img src="/check-circle.png" alt="Check" /> Access to slack community</li>
            <li><img src="/check-circle.png" alt="Check" /> 10+ templates to scale your outbound</li>
          </ul>

          {/* New Wrapper Div for Divider and Button */}
          <div className="divider-button-container">
            <hr className="divider-line" />
            <div className='button-container'>
              <ul className="pricing-descriptions"><li>Explore product capabilities</li></ul>
              <button className="button primary">Try Now</button>
            </div>
          </div>
        </div>

        {/* Growth Card */}
        <div className="pricing-card">
          <h3>Growth</h3>
          <h4 className="price">$229 / month</h4>
          <p className="old-price"><div className='price-pric'>50% off</div><p className='price-data'>$459</p></p>
          <ul className="features-list">
            <li><img src="/check-circle.png" alt="Check" /><strong>8,000 Credits</strong></li>
            <li><img src="/check-circle.png" alt="Check" /> Webhook, HTTP API</li>
            <li><img src="/check-circle.png" alt="Check" /> Credit rollover (up to 2x plan credits)</li>
            <li><img src="/check-circle.png" alt="Check" /> Outbound email integrations like Instantly, Smartlead.</li>
            <li><img src="/check-circle.png" alt="Check" /> Dedicated 3 hours from Bitscale expert</li>
          </ul>

          {/* New Wrapper Div for Divider and Button */}
          <div className="divider-button-container">
            <hr className="divider-line" />
            <div className='button-container'>
              <ul className="pricing-descriptions">
                <li>Unlimited leads search</li>
                <li>Fully enriched 5,000 leads</li>
                <li>Personalized outreach at scale</li>
              </ul>
              <button className="button primary">Continue with Growth</button>
            </div>
          </div>
        </div>

        {/* Booster Card */}
        <div className="pricing-card booster">
          <div className='price-main'><h3 className='boost'>Booster</h3><p className='popular'>Popular</p></div>
          <h4 className="price">$499 / month</h4>
          <p className="old-price"><div className='price-pric'>50% off</div><p className='price-data'>$999</p></p>
          <ul className="features-list">
            <li><img src="/check-circle.png" alt="Check" /><strong>25,000 Credits</strong></li>
            <li><img src="/check-circle.png" alt="Check" /> Webhook, HTTP API</li>
            <li><img src="/check-circle.png" alt="Check" /> Credit rollover (up to 2x plan credits)</li>
            <li><img src="/check-circle.png" alt="Check" /> Outbound email integrations like Instantly, Smartlead.</li>
            <li><img src="/check-circle.png" alt="Check" /> Dedicated 3 hours from Bitscale expert</li>
            <li><img src="/check-circle.png" alt="Check" /> Advanced models like Claude Sonnet</li>
            <li><img src="/check-circle.png" alt="Check" /> Dedicated 8 hours from Bitscale expert</li>
            <li><img src="/check-circle.png" alt="Check" /> 2-way Hubspot integration</li>
          </ul>

          {/* New Wrapper Div for Divider and Button */}
          <div className="divider-button-container">
            <hr className="divider-line" />
            <div className='button-container'>
              <ul className="pricing-descriptions">
                <li>Unlimited leads search</li>
                <li>Fully enriched 15,000 leads</li>
                <li>Personalized outreach at scale</li>
              </ul>
              <button className="button primary booste">Continue with Booster</button>
            </div>
          </div>
        </div>

        {/* Enterprise Card */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <h4>Contact Us</h4>
          <ul className="features-list">
            <li><img src="/check-circle.png" alt="Check" /> Data privacy certification</li>
            <li><img src="/check-circle.png" alt="Check" /> Priority Support</li>
            <li><img src="/check-circle.png" alt="Check" /> Dedicated Bitscale expert</li>
            <li><img src="/check-circle.png" alt="Check" /> Private Slack Channel</li>
            <li><img src="/check-circle.png" alt="Check" /> Collaborative workspace and templates</li>
          </ul>

          {/* New Wrapper Div for Divider and Button */}
          <div className="divider-button-container">
            <hr className="divider-line" />
            <div className='button-container'>
              <ul className="pricing-descriptions">
                <li>Perfect for high-volume CRM data enrichment</li>
                <li>Unlimited list of leads with unlimited data points</li>
              </ul>
              <button className="button primary">Try Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;

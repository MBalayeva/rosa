import React from 'react';
import hero from '../images/hero.jpg';

function Hero() {
    return (
      <section className="hero" id="hero" style={{backgroundImage: `url(${hero})`}}>
        <div className="container">
          <h1 className="sub-headline">
            <span className="first-letter">W</span>elcome
          </h1>
          <h1 className="headline">The Rosa</h1>
          <div className="headline-descr">
            <div className="separator">
              <div className="line line-left"></div>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
              <div className="line line-right"></div>
            </div>
            <div className="single-animation">
              <h3>We are ready to be opened</h3>
              <a href="#" className="btn cta-btn"></a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero

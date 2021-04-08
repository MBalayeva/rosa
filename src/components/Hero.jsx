import React from 'react';
import Headline from './Headline';
import hero from '../images/hero.jpg';

function Hero() {
    return (
      <section className="hero" id="hero" style={{backgroundImage: `url(${hero})`}}>
        <div className="container">
          <Headline span='w' subHeadline='elcome' headline='The Rosa'/>
          <div className="headline-descr">
            <div className="separator">
              <div className="line line-left"></div>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
              <div className="line line-right"></div>
            </div>
            <div className="single-animation">
              <h3>ready to be opened</h3>
              <a href="#" className="btn cta-btn">require</a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero

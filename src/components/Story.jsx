import React from 'react';
import Headline from './Headline';
import ourStory from '../images/our-story-1.jpg';

function Story() {
    return (
      <section className="discover-our-story">
        <div className="container">
          <div className="restaraunt-info">
            <div className="restaraunt-descr padding-right animate-left">
              <div className="global-headline">
                <Headline span="d" subHeadline="iscover" headline="Our Story" />
                <div className="asterisk">
                  <i className="fas fa-asterisk"></i>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi atque corporis architecto, esse beatae eaque ipsa vero
                doloremque veniam hic qui sequi dolore alias sit? Nulla dolorem
                ad aspernatur quae!
              </p>
              <a href="#" className="btn body-btn">
                About Us
              </a>
            </div>
            <div className="restaraunt-img animate-right">
              <img src={ourStory} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Story

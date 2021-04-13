import React from 'react';
import Fade from 'react-reveal/Fade';
import ourStory from '../images/our-story-1.jpg';
import Description from './Description';

function Story() {
    return (
      <section className="discover-our-story">
        <div className="container">
          <div className="restaraunt-info">
            <Fade left>
              <div className="restaraunt-descr padding-right">
                <Description
                  span="d"
                  subHeadline="iscover"
                  headline="Our story"
                  text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi atque corporis architecto, esse beatae eaque ipsa vero
                doloremque veniam hic qui sequi dolore alias sit? Nulla dolorem
                ad aspernatur quae!"
                  link="About Us"
                />
              </div>
            </Fade>
            <Fade right delay={500}>
              <div className="restaraunt-img animate-right">
                <img src={ourStory} alt="" />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
}

export default Story

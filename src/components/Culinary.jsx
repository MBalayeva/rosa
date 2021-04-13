import React from 'react';
import Fade from 'react-reveal/Fade';
import Description from './Description';
import delight1 from '../images/delight-group-1.jpg';
import delight2 from '../images/delight-group-2.jpg';

function Culinary() {
    return (
      <section className="culinary-delight">
        <div className="container">
          <div className="restaraunt-info">
            <Fade left>
              <div className="restaraunt-descr padding-right">
                <Description
                  span="c"
                  subHeadline="ulinary"
                  headline="delight"
                  text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi atque corporis architecto, esse beatae eaque ipsa vero
                doloremque veniam hic qui sequi dolore alias sit? Nulla dolorem
                ad aspernatur quae!"
                  link="Make a reservation"
                />
              </div>
            </Fade>
            <div className="image-group">
              <Fade up delay={500}>
                <img src={delight1} alt="" className="animate-top" />
              </Fade>
              <Fade down delay={500}>
                <img src={delight2} alt="" className="animate-bottom" />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Culinary

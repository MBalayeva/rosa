import React from 'react';
import ourStory from '../images/our-story-1.jpg';
import Description from './Description';

function Story() {
    return (
      <section className="discover-our-story">
        <div className="container">
          <div className="restaraunt-info">
            <div className="restaraunt-descr padding-right animate-left">
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
            <div className="restaraunt-img animate-right">
              <img src={ourStory} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Story

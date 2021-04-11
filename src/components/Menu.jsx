import React from 'react';
import menu1 from '../images/menu-group-1.jpg';
import menu2 from '../images/menu-group-2.jpg';
import menu3 from '../images/menu-group-3.jpg';
import menu4 from '../images/menu-group-4.jpg';
import Description from './Description';

function Menu() {
    return (
      <section className="discover-our-menu">
        <div className="container">
          <div className="restaraunt-info">
            <div className="image-group padding-right animate-left">
              <img src={menu1} alt="" />
              <img src={menu2} alt="" />
              <img src={menu3} alt="" />
              <img src={menu4} alt="" />
            </div>
            <div className="restaraunt-descr animate-right">
              <Description
                span="d"
                subHeadline="iscover"
                headline="menu"
                text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi atque corporis architecto, esse beatae eaque ipsa vero
                doloremque veniam hic qui sequi dolore alias sit? Nulla dolorem
                ad aspernatur quae!"
                link="Menu"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Menu

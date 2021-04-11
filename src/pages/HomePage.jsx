import React from 'react';
import Hero from '../components/Hero';
import Between from '../components/Between';
import Story from '../components/Story'
import Menu from '../components/Menu';
import Culinary from '../components/Culinary';
import recipies from '../images/tasteful-recipes.jpg';
import blend from '../images/perfect-blend.jpg';

function HomePage() {
    return (
      <>
        <Hero />
        <Story />
        <Between
          classname="tasteful-recipes"
          img={recipies}
          span="T"
          subHeadline="asteful"
          headline="recipes"
        />
        <Menu />
        <Between
          classname="perfect-blend"
          img={blend}
          span="P"
          subHeadline="erfect"
          headline="blend"
        />
        <Culinary />
      </>
    );
}

export default HomePage

import React from 'react';
import Headline from './Headline';
import recipies from '../images/tasteful-recipes.jpg';

function Recipes() {
    return (
        <section className='tasteful-recipes between' style={{backgroundImage: `url(${recipies})`}}>
            <div className="container">
                <div className="global-headline">
                    <Headline span='T' subHeadline='asteful' headline='recipes' />
                </div>
            </div>
        </section>
    )
}

export default Recipes 

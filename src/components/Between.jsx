import React from 'react';
import Headline from './Headline';

function Between({classname, img, span, subHeadline, headline}) {
    return (
        <section className={`${classname} between`} style={{backgroundImage: `url(${img})`}}>
            <div className="container">
                <div className="global-headline">
                    <Headline span={span} subHeadline={subHeadline} headline={headline} />
                </div>
            </div>
        </section>
    )
}

export default Between

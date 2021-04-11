import React from 'react';
import Headline from './Headline';

function Description({span, subHeadline, headline, text, link}) {
    return (
      <>
        <div className="global-headline dark-headline">
          <Headline span={span} subHeadline={subHeadline} headline={headline} />
          <div className="asterisk">
            <i className="fas fa-asterisk"></i>
          </div>
        </div>
        <p>
          {text}
        </p>
        <a href="#" className="btn body-btn">
          {link}
        </a>
      </>
    );
}

export default Description

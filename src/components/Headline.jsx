import React from 'react'

function Headline({span, subHeadline, headline}) {
    return (
      <>
        <h1 className="sub-headline">
          <span className="first-letter">{span }</span>{subHeadline}
        </h1>
        <h1 className="headline">{headline }</h1>
      </>
    );
}

export default Headline

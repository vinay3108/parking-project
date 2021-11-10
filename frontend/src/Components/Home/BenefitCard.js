import React from 'react'

const BenefitCard = ( { image,heading,desc,additional}) => {
    return (
      <>
        <div className="benefit-card-wrapper">
          <img
            src={image}
            alt={heading}
          />
                <h2>{ heading}</h2>
          <p>
            {desc}
          </p>
                <h4>{ additional}</h4>
        </div>
      </>
    );
}

export default BenefitCard

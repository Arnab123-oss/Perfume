import React from 'react'

const PerfumeCard = ({image,name}) => {
  return (
    <div className="destination__card destination__card1">
        <img src={image} alt="destination" />
        <div className="destination__details destination__details1">
          <p className="destination__subtitle">{name}</p>
        </div>
      </div>
  )
}

export default PerfumeCard
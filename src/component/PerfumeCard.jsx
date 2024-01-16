import React from 'react'

const PerfumeCard = ({image,name}) => {
  return (
    <div className="destination__card">
        <img src={image} alt="destination" />
        <div className="destination__details">
          <p className="destination__subtitle">{name}</p>
        </div>
      </div>
  )
}

export default PerfumeCard
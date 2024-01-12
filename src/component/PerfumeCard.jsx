import React from 'react'

const PerfumeCard = ({image}) => {
  return (
    <div className="trip__card">
        <img src={image} alt="trip" />
        <div className='trip__details'>Wedding Special</div>
    </div>
  )
}

export default PerfumeCard
import React from 'react'
import './StoreItem.css'

const StoreItem = ({id, image, name, price}) => {
  return (
      <div className='store-item'>
          <div className="store-item-image">
              <img className='food-item-image' src={image} alt="" />
          </div>
          <div className="store-item-information">
              <p className="food-item-description">{name}</p>
              <p className="food-item-price">${ price }</p>
          </div>
    </div>
  )
}

export default StoreItem
import React from 'react'
import './ListItemTech.css'
import { store_items_tech } from '../../assets/assets'
import StoreItem from '../StoreItem/StoreItem'

const ListItemTech = () => {
  return (
      <div className='listitem'>
          <div className='listitem-deal'>
              <h1>TECH'S PRODUCT</h1>
              <h1>SEE ALL</h1>
          </div>
          <div className='display-item'>
            {store_items_tech.map((item, index) => {
            return (
                <div className='header-item'>
                    <StoreItem key={item._id} name={item.name} price={item.price} image={item.image} />
                </div>
            )
        })}
          </div>
    </div>
  )
}

export default ListItemTech
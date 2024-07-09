import React from 'react'
import './ListItem.css'
import { store_items } from '../../assets/assets'
import StoreItem from '../StoreItem/StoreItem'

const ListItem = () => {
  return (
      <div className='listitem'>
          <div className='listitem-deal'>
              <h1>DEAL OF THE DAY</h1>
              <h1>SEE ALL</h1>
          </div>
          <div className='display-item'>
            {store_items.map((item, index) => {
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

export default ListItem
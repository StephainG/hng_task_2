import React from 'react'
import './ListItemPandT.css'
import { store_items_pandt } from '../../assets/assets'
import StoreItem from '../StoreItem/StoreItem'

const ListItemPandT = () => {
  return (
      <div className='listitem'>
          <div className='listitem-deal'>
              <h1>PHONES AND TABLET</h1>
              <h1>SEE ALL</h1>
          </div>
          <div className='display-item'>
            {store_items_pandt.map((item, index) => {
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

export default ListItemPandT
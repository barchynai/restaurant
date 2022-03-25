import React from 'react'
import './MenuItems.css'

const Menu = ({ items, addItem}) => {
  return (
    <div className='section-center'>

      {items.map((menuItem) => {
        const { id, name, img, price, desc } = menuItem;
        return (<div key={id} className="menu-item">
          <img src={img} alt={name} className="photo" />
          <div className='item-info'>
            <header>
              <h4>{name}</h4>
              <h4 className='price'>${price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
            <button type='button' onClick={() =>addItem(menuItem)} className="btn-add_to_cart">Add to cart</button>
          </div>
        </div>)
      })}

    </div>
  )
}

export default Menu
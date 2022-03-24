import React from 'react'
import { useState } from 'react'
import { data } from '../../constants'
import './MenuItems.css'


const Drinks = ({ title, price, tags, query}) => {

  const filteredData = data.drinks.filter((el) => {
    if (title.query === '') {
      return el;
    }
    else {
      return el.title.toLowerCase().includes(title.query)
    }
  })
  return (
    <div className='drinks_main'>
      <div className='app__drink-oneitem'>
        <div className='app__drinks-head'>
          <div className='app__drinks-name'>
          {filteredData.map((item) =>(
            <p className='p__cormorant drinks_p' style={{ color: "#DCCA87" }} key={item.drinks.id}>{item.drinks.title}</p>
        ))}
          </div>


          <div className='app__drinks-price'>
          {filteredData.map((item) =>(
            <p className='p__cormorant' key={item.drinks.id}>{item.drinks.price}</p>
        ))}
          </div>
        </div>

        <div className='app__drinks-tag'>
        {filteredData.map((item) =>(
            <p className='p__opensans' style={{ color: "#AAAAAA" }} key={item.drinks.id}>{item.drinks.tags}</p>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Drinks
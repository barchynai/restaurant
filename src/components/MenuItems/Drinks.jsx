import React from 'react'
import { useState } from 'react'
import { data } from '../../constants'
import './MenuItems.css'


const Drinks = ({newDrinks, query}) => {
  const filteredData = newDrinks.map((el) => {
    if (query === '') {
      return '';
    }
    else {
      return el
    }
  })
  return (
    <div className='drinks_main' >
      
        <div className='app__drinks-head'>
          <div className='app__drinks-name'>
          {filteredData.map((item) =>(
           <p className='p__cormorant drinks_p' style={{ color: "#DCCA87" }} key={item.id}>{item.title}</p> 
        ))}
          </div>
        

          <div className='app__drinks-price'>
          {filteredData.map((item) =>(
            <p className='p__cormorant' key={item.id}>{item.price}</p>
        ))}
          </div>
        </div>

        <div className='app__drinks-tag'>
        {filteredData.map((item) =>(
            <p className='p__opensans' style={{ color: "#AAAAAA" }} key={item.id}>{item.tags}</p>
        ))}
        </div>
      
    </div>
  )
}

export default Drinks
import {React, useState} from 'react'
import data from '../../constants/data'


function List(props) {
    const filteredData = data.drinks.filter((el) =>{
        if(props.input === ''){
            return el;
        }
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })
  return (
    <ul>
        {filteredData.map((item) =>(
            <li key={item.drinks.id}>{item.drinks.title}</li>
        ))}
    </ul>
  )
}

export default List
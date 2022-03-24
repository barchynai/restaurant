import React, {useEffect, useState} from "react"
import './SpecialMenu.css'
import { SubHeading } from "../../components"
import Categories from '../../components/MenuItems/Categories'
import Menu from '../../components/MenuItems/Menu'
import items from '../../components/MenuItems/data'
import { TextField, List} from "@mui/material"
import Drinks from "../../components/MenuItems/Drinks"
import {data} from '../../constants'
import Cart from "../../components/MenuItems/Cart"


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const SpecialMenu = () =>{
const [menuItems, setMenuItems] = useState(items);
const [categories, setCategories] = useState([...allCategories]);
const [query, setQuery] = useState('')

let inputHandler = (value) =>{
  setQuery(value)
};


const filterItems = (category) => {
  if(category === 'all') {
    setMenuItems(items)
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};
const newDrinks = data.drinks.filter((drink)=>drink.title.toLowerCase().includes(query.toLowerCase())

);

console.log(newDrinks)
return( 
  <div className="app__bg section__padding" id="menu">
    <div className="menu_heading">
    <SubHeading title="Chase the new flavour"/>
    <h1 className='app__header-h3'>Menu</h1>
    <Cart/>
    </div>
    <div className="search">
   <TextField
   id="outlined-basic"
   variant='outlined'
   className="searchTextfield"
   label='Look up your drink here'
   value={query}
   onChange={(e)=>inputHandler(e.target.value)}/>
   </div>
    
   <Drinks newDrinks={newDrinks} query={query}/>
       
    <Categories categories={categories}  filterItems={filterItems}/>
    <Menu items={menuItems}/>
  </div>
)
}
export default SpecialMenu

import React, {useState} from "react"
import './SpecialMenu.css'
import { SubHeading } from "../../components"
import Categories from '../../components/MenuItems/Categories'
import Menu from '../../components/MenuItems/Menu'
import items from '../../components/MenuItems/data'
import { TextField} from "@mui/material"
import Drinks from "../../components/MenuItems/Drinks"
import {data} from '../../constants'
import Checkout from '../../components/MenuItems/Checkout'
import {BsFillBasket2Fill} from 'react-icons/bs'


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const SpecialMenu = () =>{
const [menuItems, setMenuItems] = useState(items);
const [categories, setCategories] = useState([...allCategories]);
const [query, setQuery] = useState('');
const [basket, setBasket] = useState([]);
const [basketitems, setBasketItems] = useState([])

//add to basket
const addItem = (dish) => {
  // Check if the item exist or not
  const exist = basket.find((item) => item.id === dish.id);
  if (exist) {
      setBasket(basket.map(item => item.id === dish.id ? {...exist, qty: exist.qty + 1} : item));
  } else {
      setBasket([...basket, {...dish, qty: 1}]);
  }
};

// Remove from basket
const removeItem = (dish) => {
  // Check if the item exist or not
  const exist = basket.find((item) => item.id === dish.id);
  if (exist.qty === 1) {
      setBasket(basket.filter((item) => item.id !== dish.id));
  } else {
      setBasket(basket.map(item => item.id === dish.id ? {...exist, qty: exist.qty - 1} : item));
  }
};

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
const openNav = () => {
  document.getElementById("mySidenav").style.height = "350px";
};


return( 
  <div className="app__bg section__padding" id="menu">
    <div className="menu_heading">
    <SubHeading title="Chase the new flavour"/>
    <h1 className='app__header-h3'>Menu</h1>
    <div className='basket-btn'>
   <BsFillBasket2Fill onClick={openNav} className='basket-icon'/>
   <span className='total-sum'>{basket.length}</span>
   </div>
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
    <Menu items={menuItems} addItem={addItem}/>
    <Checkout dishes={basket} remove={removeItem}/>
  </div>
)
}
export default SpecialMenu

import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {

// useEffect basically runs fetch call when component mounts
useEffect(() => {
    fetchItems();
}, []) // run only when component mounts

const [items, setItems] = useState([]);

 const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');

    const shopData = await data.json();
    console.log(shopData);
    setItems(shopData);
 }  


  return (
    <div>
        {items.map(item => (
            <h1 key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </h1>
        ))}
    </div>
  );
}

export default Shop;

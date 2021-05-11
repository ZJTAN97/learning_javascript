import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Item({ match }) {

console.log(match)
// useEffect basically runs fetch call when component mounts
useEffect(() => {
    fetchItem();
}, []) // run only when component mounts

const [item, setItem] = useState({});

 const fetchItem = async () => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item)
    console.log(item)
 }  


  return (
    <div>
        <img src={item.image} />
        <h1>{item.description}</h1>
    </div>
  );
}

export default Item;

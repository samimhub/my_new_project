import React from 'react'
import { useState } from 'react';

function Footer() {
  const [food,setFood]=useState('vag');

  const foodChangeHanhle =(e)=>{
  const foods =['vag','no-vag','fast-food'];
  const int =Math.floor(Math.random() * 3);
  setFood(foods[int]);
  console.log(e.target.innerText);
}

return (
  <div>
    <h1>I like to eat {food}</h1>
    <button onClick={(e)=>foodChangeHanhle(e)}>click it</button>
  </div>
)
}
export default Footer;

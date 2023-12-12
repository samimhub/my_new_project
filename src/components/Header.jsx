import React from "react";
import { useState } from "react";
const Header=()=>{
    const [count,setCount]=useState(0);
    return(
        <div className="flex justify-center space-x-5 ">
           <button onClick={()=>setCount(count+1)}>Increment</button>
            <span>{count}</span>
           <button onClick={()=>{
            if (count <= 0) return;
            setCount(count-1)}}>Decrement</button>
           <button className='flex'onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Header;
import React from "react";
import { useState } from "react";
const Contain=()=>{
    const [name, setName] = useState('Samim');

    const nameChangeHandle=()=>{
        const names =['Samim','Sohel','Haider'];
        const int = Math.floor(Math.random() *3);
        setName(names[int]);
    }
    //const handleClick2=(name)=>{
        //console.log(`${name} click it!`);
    //}
    //const handleClick3=(e)=>{
        //console.log(e.target.innerText);
    //}
    return(
        <>
        <h1>Hello {name}</h1>
      <button onClick={nameChangeHandle}>Change Name</button>
      { /*<button onClick={() =>handleClick2('Samim')}>Click it</button>
        <button onClick={(e)=>handleClick3(e)}>Cick it</button>*/}
        </>
    )
}
export default Contain;
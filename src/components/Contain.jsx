import React from "react";
const Contain=()=>{
    const nameChangeHandle=()=>{
        const names =['Samim','Sohel','Haider'];
        const int = Math.floor(Math.random() *3);
        return names[int];
    }
    const handleClick=()=>{
        console.log('u click it!');
    }
    const handleClick2=(name)=>{
        console.log(`${name} click it!`);
    }
    const handleClick3=(e)=>{
        console.log('u click it!');
    }
    return(
        <>
        <h1>Hello {nameChangeHandle}</h1>
       { /*<button onClick={handleClick}>Click it</button>
        <button onClick={() =>handleClick2('Samim')}>Click it</button>*/}
        <button onClick={()=>handleClick3}></button>
        </>
    )
}
export default Contain;
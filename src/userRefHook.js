// useRef persists between render and is used to keep track of previus values

import {useRef, useState, useEffect} from "react";

function UseRefDemo(){
    const [inputVal, setVal]= useState(0);
    const previousValue = useRef(0);
    useEffect(()=>{
        previousValue.current = inputVal;
    }, [inputVal])
    return (
        <>
        <input type="number" value={inputVal} onChange={(e)=>setVal(e.target.value)} />
        <h2>Current Value ={inputVal}</h2>
        <h2>Previous Value = {previousValue.current}</h2>
        </>
    )
}

export default UseRefDemo;
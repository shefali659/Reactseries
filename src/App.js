import {useState, useEffect} from "react"
import './App.css';

function Car(){
  const [color, setColor] = useState('red');
  const [count, setCount] = useState(0);
const defaultColor = () =>{
	setColor('red');
}
useEffect(()=>{
	setTimeout(()=>{
setCount((count)=> count+1 )},1000)
},[]);
return(
<>
<h1> My fav color car is {color}</h1>
<h2> I have rendered {count} times</h2>
<button type="button" onClick={()=>setColor('blue')}>Blue</button>
<button type="button" onClick={defaultColor}>Reset</button>
</>
)
}

export default Car;

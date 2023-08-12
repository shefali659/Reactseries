import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRoute, Route, Routes} from "react-router-dom";
import './index.css';
import Car from './App';
import Cmp1 from './Context';
import KeysDemo from './Keys';
import UserName from "./form";
import UseRefDemo from "./userRefHook";
import ReducerDemo from "./ReducerDemo";
import ClassDemo from "./ClassDemo";
import reportWebVitals from './reportWebVitals';

export default function App(){
//  return(
//  <BrowserRouter>
//  <Routes>
//  <Route path="/" element ={<Car/>}>
//  <Route path="form" element={<UserName/>}/>
//  </Route>
//  </Routes>
//  </BrowserRouter>
//  )
}

//const myFirstElem = <h1>Hello React Baby</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClassDemo brand='Mustang'/>);
//root.render(<Car color='red'/>);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

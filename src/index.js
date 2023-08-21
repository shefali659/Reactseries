import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Car from './components/App/App.js';
import Cmp1 from './components/Context';
import KeysDemo from './components/Keys';
import UserName from "./components/form";
import UseRefDemo from "./components/userRefHook";
import TodoList from "./components/TodoList/TodoList";
import ClassDemo from "./components/ClassDemo";
import SearchFilter from './components/searchFilter';
import LoginForm from './components/Login/Loginform';
import Dashboard from './components/Dashboard';


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList/>);
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

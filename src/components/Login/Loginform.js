import {useState} from "react";
import { setCacheNameDetails } from "workbox-core";
import './LoginForm.css'
export default function LoginForm(){
    const adminDetails={email:'shefalisinghal659@gmail.com',password:'123$xyz'};
    const [user,setUser] = useState({name:"",email:"",password:""});
    const [ isLoggedIn,validateUser] = useState(false);
    const Login = (details) =>{
        console.log(details)
    }
    const Logout=()=>{
        console.log("Logout")
    }
    return(
        <>
        {!isLoggedIn?
        <>
        <h1>Login</h1>
        <form class="form-group">
        Name<br/><input type="text" /><br/>
        Email<br/><input type="email"/><br/>
        Password<br/><input type="password"/><br/>
        <button>Login</button>
        </form>
        
        
        </>
        :<h1>Welcome {adminDetails.name}</h1>
        }
        
        </>
    )
}
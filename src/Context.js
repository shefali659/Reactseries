import {useState, createContext, useContext} from "react"

const userContext = createContext();
function Cmp1(){
 const [user, setuser] = useState("Jesse")
 return (
 <userContext.Provider value={user}>
 <h1>Hello {user}</h1>
 <Cmp2/>
 </userContext.Provider>
 )

}

function Cmp2(){
	return(
	<>
	<h1>Comp2</h1>
	<Cmp3/>
	</>
	)
}

function Cmp3(){
	const user= useContext(userContext);
	return (
	<h1>Hello again {user}</h1>
	)
}

export default Cmp1;
import {useState} from 'react';

function UserName(){
	const [name, setName] = useState("");
	
	const handleSubmit = (e)=>{
		e.preventDefault();
		alert(`The name you entered is ${name}`);
	}
	
	return(
	<form onSubmit={handleSubmit}>
	<label> Enter your name
	<input type="text" value={name} onChange={(e)=>setName(e.target.value)}
	/>
	</label>
	<input type="submit"/>
	</form>
	)
}

export default UserName;
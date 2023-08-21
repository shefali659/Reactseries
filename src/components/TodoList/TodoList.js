import {useReducer} from 'react';
import './TodoList.css'

const initialTodos=[
    {
        id:1,
        title:"Todo1",
        complete:false
    },
    {
        id:2,
        title:"Todo2",
        complete:false
    }
]

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD":
        return [...state, 
            {
            id:3,
            title:action.val,
            complete:false
            }
        ]
        case "COMPLETE":
        return state.map((todo)=>{
            if(todo.id===action.id){
                return {...todo, complete: !todo.complete}
            }else{
                return todo;
            }
        })
        
        default: return state;
        
    }
}
function TodoList(){
    const [todos, dispatch] = useReducer(reducer, initialTodos); 

    const handleChange=(todo)=>{
        dispatch({type:"COMPLETE", id:todo.id})
    }
    const handleAdd=(e)=>{
        dispatch({type:"ADD",val:e.target.value})
    }
    return(
        <>
        <div className="app">
        <form>
            <input type="text"></input>
            <button onClick={(e)=>handleAdd(e)}>Add Todo</button>
        </form>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <label>
                <input type="checkbox" checked={todo.complete} 
                    onChange={()=>handleChange(todo)}
                /> 
                {todo.title}
                </label>
            </div>
            
        )
            
        )}
        </div>
                
        </>
    )
}
export default TodoList;
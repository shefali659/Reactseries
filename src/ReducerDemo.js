import {useReducer} from 'react';
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
function ReducerDemo(){
    const [todos, dispatch] = useReducer(reducer, initialTodos); 

    const handleChange=(todo)=>{
        dispatch({type:"COMPLETE", id:todo.id})
    }
    return(
        <>
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
        
        
        </>
    )
}
export default ReducerDemo;
import React ,{useState} from "react";

const TodoForm=({addTodo})=>{

    const [value,setvalue] = useState("");
    const handlesubmit = e=>{
        e.preventDefault();
        addTodo(value);
        setvalue("")
    }
    return (
       <form className="TodoForm" onSubmit={handlesubmit}>
        <input placeholder="what is the task for today"  type="text" className="todo-input"
        onChange={(e)=>setvalue(e.target.value)}
        value={value}
        />
        <button type="submit" className="todo-btn">Add Task</button>
       </form>

    )
}

export default TodoForm;
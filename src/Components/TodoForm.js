import React ,{useState} from "react";

const TodoForm=()=>{

    const [value,setvalue] = useState("");
    const handlesubmit = e=>{
        e.preventDefault();
        console.log(value);

    }
    return (
       <form className="TodoForm" onSubmit={handlesubmit}>
        <input placeholder="what is the task for today"  type="text" className="todo-input"
        onChange={(e)=>setvalue(e.target.value)}
        />
        <button type="submit" className="todo-btn">Add Task</button>
       </form>

    )
}

export default TodoForm;
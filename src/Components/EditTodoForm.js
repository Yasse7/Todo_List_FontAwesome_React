import React ,{useState} from "react";

const FormTodoForm=({editTodo,task})=>{

    const [value,setvalue] = useState(task.task);
    const handlesubmit = e=>{
        e.preventDefault();
        editTodo(value,task.id);
        setvalue("")
    }
    return (
       <form className="TodoForm" onSubmit={handlesubmit}>
        <input placeholder="Update Task"  type="text" className="todo-input"
        onChange={(e)=>setvalue(e.target.value)}
        value={value}
        />
        <button type="submit" className="todo-btn">Update</button>
       </form>

    )
}

export default FormTodoForm;
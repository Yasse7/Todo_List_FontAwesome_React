import React,{useState} from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm"
import Todo from "./Todo"
import {v4 as uuidv4} from 'uuid';
uuidv4();



const TodoWrapper=()=>{
    const [todos,settodos] =useState([
    ]);

    const addTodo= todo =>{
        settodos([
            ...todos,{id : uuidv4(),task:todo,completed:false,isEditing:false}
        ])
        console.log(todos);
    }
    const toggleCompleted = id=>{
       settodos(todos.map(todo=>todo.id===id ? {...todo,completed: !todo.completed} :todo))
    }
    const deletetodo = id=>{
        settodos(todos.filter(todo=>todo.id !== id))
    }

    const editTodo =id=>{
        settodos(todos.map(todo=>todo.id===id ?{...todo,isEditing :!todo.isEditing}:todo))
    }
    const editTask =(task,id)=>{
        settodos(todos.map(todo=>todo.id===id ?{...todo,task ,isEditing:!todo.isEditing}:todo))
    }

    return (
           <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? 
                (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : 
                ( <Todo task={todo} key={index} toggleCompleted={toggleCompleted} deletetodo={deletetodo} editTodo={editTodo}/>)
               
           ))}
            
            </div>

    )
}
export default TodoWrapper;
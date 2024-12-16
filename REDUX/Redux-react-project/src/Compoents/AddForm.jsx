import { useState } from "react";
import { UseDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

export default function AddForm(){
    const[task,setTask]=useState("");
    const dispatch =useDespatch();

    const submitHandler=(evt)=>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(el)=>setTask(e.target.value)}/>
            <button>Add task</button>
        </form>
        </>
    )
}
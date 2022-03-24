import { useState } from 'react';

export default function Todo(){
    const [todo,setTodo]=useState({
        title: '',
        discription: ''
    });
 const {title,discription}=todo;
    const handelInput=(e)=>{
        const inputValue=e.target.value;
        const warning=inputValue.includes(".js")?"you have to compate this task" : null;
        setTodo(inputValue);
        // setWarning(warning);

    }

    return(
        <div>
            <p>{title}</p>
            <p>
                <input type='text' value={title} onChange={(e)=>setTodo({
                    ...todo,
                    title:e.target.value,
                })}/>
            </p>
            <p>{discription}</p>
            <p><input type="text" name="todo" value={discription} onChange={(e)=>setTodo({
                ...todo,
                discription:e.target.value,
            })}   /></p><br>
            </br>
       
        </div>
    )
}

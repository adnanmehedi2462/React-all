import { useState } from 'react';

export default function Todo(){
    const [todo,setTodo]=useState('');
    const[warning,setWarning]=useState();
    const handelInput=(e)=>{
        const inputValue=e.target.value;
        const warning=inputValue.includes(".js")?"you have to compate this task" : null;
        setTodo(inputValue);
        setWarning(warning);

    }

    return(
        <div>
            <p>{todo}</p>
            <p><input type="text" name="todo" value={todo} onChange={handelInput}   /></p><br>
            </br>
            <h2>{warning||'good choice'}</h2>
        </div>
    )
}

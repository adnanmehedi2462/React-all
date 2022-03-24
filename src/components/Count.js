import { useState } from 'react';
function Count(){
    const [count,setCount]=useState(2000);

    return(
        <div>
            
            <button type="button" onClick={()=>setCount((prevState)=>prevState+1)} >Add {count}</button>
        </div>
    )
}
export default Count;
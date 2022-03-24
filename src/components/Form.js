import { useEffect, useRef } from 'react';
function From(){
const inputref=useRef(null);


useEffect(()=>{
    inputref.current.focus();
},[])



    return (
        <div>
            <input ref={inputref} type="text" name="text" placeholder="enter name"/>

        </div>
    )
}
export default From;
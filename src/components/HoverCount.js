import React from "react";
export default function ClickCounter ({count,incrementCount}){

        return(
            <div>
                <h1 onMouseOver={incrementCount}>Clicked me{count} </h1>
            </div>
        )
    
}


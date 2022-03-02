
import React from 'react';


const scalName = {
    c:'celsius',
    f:'fahrenheit',

};


export default function Tempinput({scal,Temp,OnTempChange}) {
    
        return( 
                <fieldset>
                    <legend>Enter Temp In {scalName[scal]}</legend>
                    <input type="text" value={Temp} onChange={(e)=>OnTempChange(e,scal)} />
                </fieldset>
            


        )

    }

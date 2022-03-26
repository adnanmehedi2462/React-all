import { useEffect, useState } from 'react';
 const UsewindowWidth =(screen)=> {
    const[onSmallScreen,setonSmallScreen]=useState(false)

   
    useEffect(()=>{
        const checkScreensize=()=>{
            setonSmallScreen(window.innerWidth < screen);
        };
        checkScreensize();
        window.addEventListener("resize",checkScreensize);
        return ()=> window.removeEventListener("resize",checkScreensize);

    },[screen]);

    return onSmallScreen;
}
export default UsewindowWidth;
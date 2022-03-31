
import { Link, Outlet, useNavigate } from 'react-router-dom';
export default function About(){
const navi=useNavigate();
const goback=()=>{
    navi(-2);
}
    return(
        <div>
           <button type="button" onClick={goback}>back</button>
           <h1>About page</h1>
           <Outlet />
           <Link to="/">Home</Link>
            </div>
    )
}
import { NavLink } from 'react-router-dom';

export default function Nav(){
    return(
        <div className="Navbar">
            <li><NavLink  to="/" style={{color:'red',fontSize:20,}}>Home</NavLink></li><br></br>
            
            <li><NavLink className="Love" to="/about">About</NavLink></li>
            <li><NavLink className="Love" to="/services">Services</NavLink></li>
            <li><NavLink className="Love" to="/dashboard">Dashboard</NavLink></li>
        </div>
    )
}
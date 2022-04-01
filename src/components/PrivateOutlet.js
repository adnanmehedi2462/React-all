
import useAuth from "../hooks/useAuth";
import {Outlet,Navigate} from 'react-router-dom';
export default function PrivateOutlet(){
    const auth=useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />
}
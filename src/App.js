import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Dashboard from "./components/Dashbord";
import Error from "./components/Error";
import Home from "./components/Home";
import Services from "./components/Services";



export default function App(){
      return(
              <div className="App">
                    
                        <Routes>
                     
                     <Route path="/" element={ <Navigate to="/home" />} />
                     <Route path="/home" element={<Home />}  />
                     <Route path="/about/*" element={<About />}>
               


                                        <Route path="category" element={<h1>This is a category </h1>}> </Route>
              
                      </Route>
                     <Route path="/dashboard" element={<Dashboard />}  />

                     <Route path="/services" element={<Services />}  />
                     <Route path="*"  element={<Error />}  />


             </Routes>


              </div>
      
      )
    

}

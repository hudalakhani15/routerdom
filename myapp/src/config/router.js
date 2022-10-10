
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import About from "../screens/About"
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Service from "../screens/Services";
import Location from "../screens/Location";


export default function AppRouter() 

{
  return (

 
    <Router>
         
       
        <div className="bg-secondary h-50">
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='/'>Home</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='contact'>Contact</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='about'>About</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='service'>Service</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='location'>Location</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="location" element={<Location/>}/>
            
            
        </Routes>
      
    </Router>  
  );
}



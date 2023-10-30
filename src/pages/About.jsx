import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
const About=()=>{
 return(
    <div>
        <Navbar/>
        <h1>
            This is About Page
        </h1>
        <Link to ="/">Home</Link>

        <div>
            
        </div>
    </div>
 )
}
export default About
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetails=()=>{
    const{name,id,address}=useParams();
    const[continent,setContinent]=useState();
    const[country,setCountry]=useState();
    const[district,setDistrict]=useState();

    useEffect(()=>{

    },[continent])

    return(
        <div>
            <h1>Name is {name}</h1>
            <h2>Id is {id}</h2>
            <h3>The Address is {address}</h3>
            
                <select value={continent} onChange={(e)=>setContinent(e.target.value)}>
                    <option value="null">Select Continent</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                </select>
                              
                    {
                        continent =="Asia" && (
                        <div>
                        <select value={country} onChange={(e)=>setCountry(e.target.value)}>
                        <option value="null">Select Country</option>                       
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        </select>
                        {
                         country=="Bangladesh" && (
                           <select value={district} onChange={(e)=>setDistrict(e.target.value)}>
                            <option value="null" >Select District</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshai">Rajshai</option>
                           </select>
                        )}
                        
                        { country=="India" && (
                                <select value={district} onChange={(e)=>setDistrict(e.target.value)}>
                                 <option value="null" >Select District</option>
                                 <option value="Kolkata">Kolkata</option>
                                 <option value="Chennai">Chennai</option>
                                 <option value="Delhi">Delhi</option>
                                </select>
                         )}                       
                        </div>
                        )}
                        
                        {
                        continent=="Europe" && (
                                <div>
                                    <select value={country} onChange={(e)=>(setCountry(e.target.value))}>
                                        <option value="null">Select Country </option>
                                        <option value="UK">UK </option>
                                        <option value="Germany">Germany</option>
                                        
                                       
                                    </select>
                                    {
                                        country=="UK" &&(
                                            <select value={district} onChange={(e)=>setDistrict(e.target.value)}>
                                                <option value="null">Selet District</option>
                                                <option value="London">London</option>
                                                <option value="Bristol">Bristol</option>

                                            </select>
                                        )
                                    }
                                    {
                                        country=="Germany" &&(
                                          <select value={district} onChange={(e)=>setDistrict(e.target.value)}>
                                            <option value="null">Select District</option>
                                            <option value="Barlin">Barlin</option>
                                            <option value="Humberg">Humberg</option>

                                          </select> 
                                        )
                                    }
                                    
                                </div>
                        )
                    }

</div>
                    
    )}
                    
       

export default StudentDetails;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Photos from "../components/photos";
const Product=()=>{
 const [photos, setPhotos] =useState([]);

 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos").then(response=>{
        return response.json()
    })
    .then(data=>{
        
        setPhotos(data)
        console.log(data)
    })
 })

    return(
        <div>
           <div>

            {
                photos.map((item,index)=>(
                 <div key={index}>
                 <Photos photos={item}></Photos>
                 </div>
                ))}
             

           </div>

            <Link to="/">Go to home</Link>
        </div>
    )
}
export default Product
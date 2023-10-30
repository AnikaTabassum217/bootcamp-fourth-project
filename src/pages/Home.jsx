import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import StudentCard from "../components/StudentCard";
import Car1 from "../assets/images/car1.webp"


const Home=()=>{
    let student=[
        {
            name:"Anika",
            id:1,
            address:"Savar,Dhaka",
            image: Car1
        },
        {
            name:"Pushpo",
            id:2,
            address:"Badda,Dhaka"
        },
        {
            name:"Mila",
            id:3,
            address:"Gulsan,Dhaka"
        },
    ]
  
    return(
        <div>
            <Navbar/>
            <h1 style={{color:"pink"}}>This is Home page</h1>
            <Link to ="/about">About Page</Link>

          {
            student.map((item,index)=>{
                return(
                    <div key={index}>
                        <StudentCard name={item.name} id={item.id} address={item.address} image={item.image}>
                        </StudentCard>
                    </div>
                )
            })
          }
            <div>
    

    <div class="container mx-auto p-4">
        <div class="flex flex-wrap">
           
            <div class="w-full lg:w-2/3 bg-white p-4">
                <h1 class="text-2xl font-bold">Main Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>

          
            <div class="w-full lg:w-1/3 bg-white p-4 mt-4 lg:mt-0">
                <h2 class="text-xl font-bold">Sidebar</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    </div>


            </div>
        </div>
    )
}
export default Home;
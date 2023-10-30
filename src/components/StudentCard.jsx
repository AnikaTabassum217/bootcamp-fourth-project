import React from "react";
import { Link } from "react-router-dom";

const StudentCard=(props)=>{
return(
    <Link to={"student-details/"+props.id+"/"+props.name+"/"+props.address}>
    <div >
        <p>Name of the student {props.name}</p>
        <p>Id id {props.id}</p>
        <p>Address is {props.address}</p>
        <img src={props.image} width={200} />

    </div>
    </Link>
)
}

export default StudentCard;
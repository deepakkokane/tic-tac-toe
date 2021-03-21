import React from "react";

import {FaTimes,FaRegCircle,FaPen} from "react-icons/fa";


const Icon=({name})=>{

   switch(name){
       case "empty":
           return <FaPen className="icons"/>
       case "cross":
           return <FaTimes className="icons"/>
        default:
           return <FaRegCircle className="icons"/>
   }
}

export default Icon;
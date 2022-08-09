
import React from "react";
import "./css/header.css";
 
import data from './Data.js';
export default function Card({setInput}) {

  const getinput=((e)=>{
 
    setInput(e.target.value)
    
     
   
  }) 
return(
  <>
<div className="header">
<input type="text" className="inputbox" onChange={getinput} placeholder="search Here"></input>
<button className="login">Login</button>
<button className="signup">Sign Up</button>

</div>
  </>
)

};

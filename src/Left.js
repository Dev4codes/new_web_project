
import React from "react";
import "./css/left.css";
 
import data from './Data.js';
export default function Left({input}) {
  const hi1=(()=>{
    alert("hi you have clicked on option1")
  })
  const hi2=(()=>{
    alert("hi you have clicked on option2")
  })

 return(
   <>
    
                <div className="left-div"> 
                <div className="dropdown">Menu
                    <div className="content">
                          <div className="drpbtn"  onClick={hi1}>option1</div>
                          <div className="drpbtn"onClick={hi2}>option2</div>
                          <div className="drpbtn">option</div>
                          <div className="drpbtn">option</div>
                          
                              </div>
                          </div>
                </div>

</>
 )

};

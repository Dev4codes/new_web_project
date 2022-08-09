
import React from "react";
import "./style.css";
 
import data from './Data.js';
export default function Card({input}) {
//let filterData=data.filter(ele=>ele.Name.includes(input))
  let filterData=data.filter(ele=>ele.Name.includes(input))

  console.log(filterData) 
 return(
   <>
    
                <div className="main-div">
                  {
                 

                    filterData.map((ele)=>{
                      return(
                        <>
                          <div className="card">
                                <div className="imgpart">
                                  <img src="./" alt="image"/>
                            </div>
                      
                        <div className="datapart">
                                <div className="name">{ele.Name}</div>
                                <div className="name">{ele.Reg_Number}</div>
                        </div>

                          </div>
                      </>

                      )
                      
                    })
                  }
                </div>

</>
 )

};

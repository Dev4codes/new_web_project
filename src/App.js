import React,{useState}from "react";
import "./style.css";
import Card from "./Card.js";
import Header from "./Header.js";
import Left from "./Left.js";

export default function App() {
  const [input,setInput]=useState("");
  
  
  
 

  return (
    <>
    <Header setInput={setInput} />
 <div className="doc">
 
     
   
    



    
  
  <Left/>
    <Card input={input }   />
</div>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata);

ReactDOM.render(
   <>
   <h1 className="heading_style"> List Of My 3 favourite Series 2020</h1>
   {Sdata.map((val) => {
     return (
           
    <Card 
    imgsrc={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.links}
    />
     );
    })}
   </> , 
  document.getElementById("root")

);

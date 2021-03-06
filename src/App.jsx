import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () =>(
   <>
   <h1 className="heading_style"> List Of My 3 favourite Series 2020</h1>
   {Sdata.map((val) => {
     return (
    <Card 
    key={val.id}
    imgsrc={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.links}
    />
     );
    })}
   </> 
);
export default App;

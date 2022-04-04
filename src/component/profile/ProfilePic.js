import React  from "react";
import image from "component/profile/Lens.jpg"
import "./style.css"

function Pic() {
    return ( 
        <div> 
        <img src={image} className="pic" alt=""/>
    </div>
    )
};

    

export default Pic;
import React from "react";
import "./preLoader.css"
import plane from "./plane.gif"
function Preloader (){
    return(
        <>
     <div className="preloader-plane">
        <div className="plane">
            <img src={plane} alt="" srcset="" />
        </div>

     </div>
   
        </>
    )
}
export default Preloader;
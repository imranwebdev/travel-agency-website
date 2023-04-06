import { useEffect,React, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';
import "./scrollBtn.css"
function ScrollBtn(){
const [showButton,setShowButton] = useState(false);
useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
},[]);
const handleScroll = ()=>{
    if(window.pageYOffset>300){
        setShowButton(true)
    }else{
        setShowButton(false);
    }
}
const handleClick=()=>{
    window.scrollTo({top:0,behavior:'smooth'});
}


return(
    <>
    <div className="scrollButton">
        {showButton && (
            <button className="top-btn"onClick={handleClick}>
                 <FaArrowUp />
            </button>
        )}
    </div>
    </>
)
}
export default ScrollBtn;
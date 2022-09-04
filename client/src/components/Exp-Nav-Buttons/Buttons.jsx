import React from "react";
import './Buttons.css'
const Buttons = (prop) => {
    return (
        <>
            <div className="Nav-Buttons">
               
                    <div className="center">
                        <button className="btn">
                            <svg  viewBox="0 0 180 60" >
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>{prop.children}</span>
                        </button>
                    </div>
                
            </div>
        </>
    )
}
export default Buttons;
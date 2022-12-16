import React from "react";
import { Link,Outlet } from "react-router-dom";
import './ExpNav.css'
const ExpNav = () => {
    const list = [
        'Aim',
        'Theory',
        'Objective',
        'Procedure',
        'Simulation',
        'Quizz',
        'Reference',
    
    ]
    
    return (
        <>
            <div className="Experiment-bar section__padding">
                {list.map((e) => {
                    return (
                       <Link key={e} to={e==="Aim"?"":e}>
                        <div className="nav_Bar">
                            <img src="" alt="" />
                            <button className="exp-button" >{e}</button>
                            </div>
                        
                        </Link>
                    )
                })}
            </div>
            <Outlet/>
        </>
    )
}
export default ExpNav;
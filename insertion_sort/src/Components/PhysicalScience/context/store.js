import React, { useState } from "react";
import Context from './context';
const Store =(prop)=>{
    const state ={
        "url":"nonedi",
    }
   const [turl,setUrl]= useState(state);
   const Urlset=(prop)=>{
       setUrl({
           'url':prop
       })
   }
    return(
        <Context.Provider value={{turl,Urlset}}>
            {prop.children}
        </Context.Provider>
    )
}
export default Store;
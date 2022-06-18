import { useState } from "react";
import Divbox from "./Divbox";

const Simulation=()=>{
    const colors=["#FF0000","00FF00","0000FF","FFFF50"]
    const algorithm=()=>{
        for(let i=0;i<val;i++){
            let key=array[i];
            console.log(key)
            let j=i-1;
            while(j>=0 && array[j]>key){
                array[j+1]=array[j];
                j--;
            }array[j+1]=key;
        }
    }
    const [val,changeVal]=useState('');
    const array=[''];
     const[errors,setErrors]=useState('');
    const handleChange=(e)=>{
        if(e.target.value>10){
            setErrors("*Max size=10")
        }
       else {changeVal(e.target.value);
              setErrors("")}
    }

    const generateRandom=(max,min)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    // for(let i=0;i<val;i++){
    //     array.push(generateRandom(10,100))
    // }
    // const boxes=array.map((item)=>{
    //     return(<Divbox value={item}></Divbox>)
    // })
    
    const generateElements =()=>{
        for(let i=0;i<val;i++){
            array.push(generateRandom(10,100))
        }
        console.log(array[0])
        updateBoxes(array.map((item)=>{
            return(<Divbox value={item}></Divbox>)
        })
        )
        algorithm();
    }
    const [boxes,updateBoxes]=useState('');
    
    return (
        <div className="flex justify-evenly m-5">
            <div className="border-slate-300 border-4 h-96 p-5 w-1/3">
                <h2 className="text-center text-2xl font-bold">Input</h2>
                {errors?<div className="text-red-500 m-0">{errors}</div>:null}
                <label htmlFor="size">Array size:- </label>
                <input type="number" name="size" className="mb-12 border-2 border-slate-300" value={val} onChange={handleChange}></input>
                <br></br>
                
                <button className="p-2 bg-blue-600 text-white m-2 " onClick={generateElements}>Generate random elements.</button>
               
            </div>

            <div className="border-slate-300 border-4 h-96 p-5 w-2/3">
                <h2 className="text-center font-bold text-2xl ">Code</h2>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia iste at, cupiditate laboriosam tempore. Omnis aut eum harum laborum, dolorem atque amet iure quis saepe dolores quidem veniam, ratione et pariatur tempore. Officiis error neque rem laudantium cupiditate eveniet, repellendus nulla asperiores voluptates qui laboriosam, nihil pariatur expedita aspernatur.
            </div>

            <div className="border-slate-300 border-4 h-96 p-5 w-1/3">
                <h2 className="text-center font-bold text-2xl">Output</h2>
                <div className="mt-5">{boxes}</div>
                
            </div>
        </div>
    );
}
export default Simulation;
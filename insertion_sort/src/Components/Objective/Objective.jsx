import React from "react";
import objective from './objective.jpg'
const Objective=()=>{
    return (
       
            <div className=' lg:mx-5 my-0 m-2 p-5'>
                
                <div className="flex justify-around">
                    <div>
                    <h1 className=" text-xl pt-2 md:text-3xl  sm:mt-5 sm:mb-4 text-center text-slate-500 font-rubik ">Sorting Algorithms Virtual lab</h1>
                <p className=" text-base md:text-xl font-light sm:leading-relaxed sm:mt-8 sm:mb-4 pt-2 text-center text-stone-800 ">
                The primary objective of the Virtual Lab for Sorting Algorithms is to create an environment where students can interact with algorithms such as bubble sort and insertion sort. The lab demonstrates the process of sorting an array of values using these algorithms. This Virtual Lab's purpose is to complement the lectures and reading materials as well as the programming lab by presenting visual animations of algorithm execution.
                </p>
                </div>
                <div><img alt="Objective" src={objective} className='h-96 w-[1200px]'></img></div>
                </div>
            </div>
       
    );
}

export default Objective;

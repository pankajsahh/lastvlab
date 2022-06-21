import React from "react";
import DSA from './DSA.jpg';

const Introduction=()=>{
    return (
        <div className='flex justify-around pb-5 h-3/5'>
            <div className='m-10 p-5 h-3/5'>
                <h1 className="text-3xl font-semibold mt-5 mb-4 text-center text-slate-500 ">Data Structures and Algorithms</h1>
                <p className="text-xl font-light leading-relaxed mt-8 mb-4 text-stone-800">
                Data structure algorithms are the focus of this virtual lab. The course provides the basis for understanding a variety of data structures as well as the algorithms that operate on them. The emphasis of this lab is on sorting algorithms. It helps students' learning by demonstrating the execution of an algorithm on a particular data structure, allowing them to write code efficiently. The experiment section contains a list of experiments. The interactive experiments in this lab will allow students to learn about algorithms and have a better knowledge of how to use them.
                </p>
            </div>
            <img  src={DSA} alt="Can't load"></img>

        </div>
    );
}

export default Introduction;

import React from "react";
import feedback from './feedback.png';
import {Link,BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const Feedback=()=>{
    return (
        <div>
            <h1 className="text-xl sm:text-3xl font-rubik  mb-0 mt-4 text-center text-slate-500 ">Virtual lab on Sorting Algorithms</h1>
        <div className='sm:flex justify-around pb-2'>
            <div className='sm:m-5 sm:p-5 lg:mb-0 p-2 sm:mt-0 m-0'>
                {/* <h1 className="text-xl sm:text-3xl font-semibold mt-1 mb-4 text-center text-slate-500 ">Virtual lab on Sorting Algorithms</h1> */}
                <h3 className="text-lg font-medium 
                sm:mt-0 lg:mt-5 xl:mt-10 sm:text-xl text-stone-900">Greetings, User</h3>
                <p className="sm:text-xl text-base font-light sm:leading-relaxed sm:mt-5 text-stone-800">
                Thank you for taking the time to visit Virtual Labs. Your opinion is incredibly helpful to us. We'd like to ask you a few questions about your experience of the lab to help us improve. It will just take a few minutes of your time, and your responses will assist us in enhancing Virtual Labs for you and other users.
                </p>
            </div>
            <img className="xl:h-64 lg:h-56 lg:w-102 sm:w-48 sm:h-24 md:w-96 md:h-52 mb-0 sm:mt-5 h-14 w-28  float-right" src={feedback}></img>
            </div>
        <button className="sm:ml-10 ml-3 bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:transition hover:ease-in-out hover:duration-800 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link to='/Feedback/Feedbackk'>Feedback Form</Link>
        </button>
        <p className="text-lg sm:text-xl sm:ml-10 ml-3 font-light sm:leading-relaxed sm:mt-8 lg:mt-5 text-stone-800 pt-2">
        Thank you for taking the time to read this.
        </p>
        <h3 className="text-lg sm:text-xl ml-10 font-medium mt-2 text-stone-900">Virtual Labs' Team</h3>
        </div>
    );
}

export default Feedback;
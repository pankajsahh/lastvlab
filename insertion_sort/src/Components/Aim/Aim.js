import React from 'react'
import aim from './aim.png';

export default function Aim() {
  return (
    // <div className='flex justify-evenly pb-5'>
    //     <div className='m-10 p-5'>
    //     <h3 className='font-rubik text-center p-7 text-3xl tracking-wider'>Aim</h3>
    //     <small className='font-thin text-xl'>Sorting is a fundamental task in computing, the aim of
    //     this expriment is to understand the working, implementation and different characteristics of 
    //     insertion sort with the help of examples and animations.</small>    
    //     </div>
    //     <img src={aim} alt="Can't Load." className='h-96 mr-5 p-5'></img>
    // </div>
    <div className=' fixed h-3/5'>
    <div className='sm:flex justify-around pb-'>
        <div className='sm:m-10 sm:p-5 text-center mt-2 '>
            <h3 className='font-rubik text-center px-7 pt-2 sm:text-3xl lg:p-7 tracking-wider '>Aim</h3>
            <small className=' sm:text-xl text-sm text-left'>Sorting is a fundamental task in computing, the aim of
this expriment is to understand the working, implementation and different characteristics of 
insertion sort with the help of examples and animations.</small>
        </div><img src={aim}   className="h-52 lg:h-fit ml-20 mt-10"></img></div>
</div>
  )
}

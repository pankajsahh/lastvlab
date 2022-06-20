import React from 'react'
import aim from '../aim.png';

export default function Aim() {
  return (
    <div className='flex justify-around pb-5'>
        <div className='m-10 p-5'>
        <h3 className='font-semibold text-center p-7 text-3xl tracking-wider'>Aim</h3>
        <small className='font-thin text-xl'>Sorting is a fundamental task in computing, the aim of
        this expriment is to understand the working, implementation and different characteristics of 
        insertion sort with the help of examples and animations.</small>    
        </div>
        <img src={aim}></img>
    </div>
  )
}

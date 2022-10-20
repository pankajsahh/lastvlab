import React from 'react'
import ExperimentHeader from '../ExperimentHeader/ExperimentHeader';
import theory from './Theory.jpg'
import theory1 from './Theory1.png'

const Theory = () => {
  return (
    <>
    <ExperimentHeader th='text-white underline'/>
    <div className='sm:flex justify-around pb-5 '>
        <div className='m-10 p-5'>
        <h3 className='font-rubik text-center p-7 text-3xl tracking-wider text-slate-500'>Theory</h3>
        <small className='text-sm font-thin sm:text-lg'>Insertion sort is a simple sorting algorithm 
        that works similar to the way you sort playing cards in your hands. The array is 
        virtually split into a sorted and an unsorted part. Values from the unsorted part 
        are picked and placed at the correct position in the sorted part.</small><br/><br/>
        <h4 className='text-lg underline font-bold text-slate-500'>Charactertistic of Insertion Sort</h4>   
        <ul className='text-sm font-thin sm:text-lg list-disc'>
          <li>It is an efficient algorithm for sorting a small number of elements.</li>
          <li>It is an inplace algorithm i.e. it rearranges the number within an array.</li>
          <li>It is a stable algorithm i.e. it maintains the relative order of elements.</li>
          <li>It sorts the array in O(n<sup>2</sup>) time in worst case and in O(n) time in best case.</li>
          <li>The space complexity is O(1).</li>
        </ul><br />
        <h4 className='text-lg underline font-bold text-slate-500'>Insertion Sort Algorithm</h4>
        <small className='text-lg font-thin'>In order to sort an array in ascending order:</small>
        <ul className='text-sm font-thin sm:text-lg list-disc'>
          <li>Iterate from arr[1] to arr[n-1] over the array.</li>
          <li>Compare the current element (key) to its predecessor.</li>
          <li>If the key element is smaller than its predecessor, compare it to the elements before.</li>
          <li>Move the greater elements one position up to make space for the swapped element.</li>
        </ul><br />
        <h4 className='text-lg underline font-bold text-slate-500'>Example</h4>
        <small className='text-lg font-bold'>Input: </small> 
        <small className='text-lg font-thin'>15, 9, 30, 10, 1</small><br />
        <small className='text-lg font-bold'>Expected Output: </small> 
        <small className='text-lg font-thin'>1, 9, 10, 15, 30</small>
        </div>
        <img src={theory} alt="Sorting cards" className='object-scale-down' width=""/>
    </div>
    <img src={theory1} alt=""/>
    </>
  )
}

export default Theory;
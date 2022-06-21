import React from 'react'
import ExperimentHeader from '../ExperimentHeader';
import theory from '../Theory.png'

const Theory = () => {
  return (
    <>
    <ExperimentHeader th='text-red-500 underline'/>
    <div className='flex justify-around pb-5'>
        <div className='m-10 p-5'>
        <h3 className='font-semibold text-center p-7 text-3xl tracking-wider'>Theory</h3>
        <small className='font-thin text-lg'>Insertion sort is a simple sorting algorithm 
        that works similar to the way you sort playing cards in your hands. The array is 
        virtually split into a sorted and an unsorted part. Values from the unsorted part 
        are picked and placed at the correct position in the sorted part.</small><br/><br/>
        <h4 className='text-lg underline font-bold'>Charactertistic of Insertion Sort</h4>   
        <ul className='font-thin text-lg list-disc'>
          <li>It is an efficient algorithm for sorting a small number of elements.</li>
          <li>It is an inplace algorithm i.e. it rearranges the number within an array.</li>
          <li>It is a stable algorithm i.e. it maintains the relative order of elements.</li>
          <li>It sorts the array in O(n<sup>2</sup>) time and occupy O(1) space.</li>
        </ul><br />
        <h4 className='text-lg underline font-bold'>Insertion Sort Algorithm</h4>
        <small className='text-lg font-thin'>In order to sort an array in ascending order:</small>
        <ul className='font-thin text-lg list-disc'>
          <li>Iterate from arr[0] to arr[n-1] over the array.</li>
          <li>Compare the current element (key) to its predecessor.</li>
          <li>If the key element is smaller than its predecessor, compare it to the elements before.</li>
          <li>Move the greater elements one position up to make space for the swapped element.</li>
        </ul> 
        </div>
        <img src={theory}></img>
    </div>
    </>
  )
}

export default Theory;
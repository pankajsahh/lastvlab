
import React from "react";
import { Link } from "react-router-dom";
import img3 from "./img3.png";

const References=()=>{
    return (
        <div className='flex justify-around pb-5'>
            <div className='m-5 p-5'>
                <ul className="text-2xl marker:text-black mt-8 mb-4 text-stone-800 p-5 list-disc list-inside bg-black-400">
                    <li className="pb-3 no-underline hover:underline text-sky-700"><a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank">Sorting Algorithms : Geeks for Geeks</a></li>
                    <li className="pb-3 no-underline hover:underline text-sky-700"><a href="https://www.programiz.com/dsa/insertion-sort" target="_blank">Insertion Sort (With Code in Python/C++/Java/C) - Programiz</a></li>
                    <li className="pb-3 no-underline hover:underline text-sky-700"><a href="https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm" target="_blank">Data Structure and Algorithms Insertion Sort - Tutorialspoint</a></li>
                    <li className="pb-3 text-sky-700">Kleinberg, J., & Tardos, E. (2013). Algorithm Design. 1st edition. Pearson Education 
India. Additional Resources</li>
                    <li className="pb-3 text-sky-700">Cormen, T.H., Leiserson, C.E. Rivest, R.L., & Stein, C.(2015). Introduction to Algorithms. 
3rd edition. PHI.</li>

                </ul>
            </div>
            <img className="mt-10" src={img3}/>
        </div>
    );
}

export default References;



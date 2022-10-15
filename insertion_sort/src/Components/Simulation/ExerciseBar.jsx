import React,{useContext, useEffect} from 'react'
import { ExerciseContext } from '../../Context/ExerciseState'
const ExerciseBar = () => {
    const context=useContext(ExerciseContext);
    
    useEffect(()=>{
        // change the background color of the current question
        const ele=document.getElementsByClassName('li')[context.li];
        ele.style.backgroundColor='gray';
        // change the bg of not selected exercise
        for(let i=0;i<5;i++){
            if(i!=context.li){
                document.getElementsByClassName('li')[i].style.backgroundColor="#d1d5db";
            }
        }
    })

    const enableSubmitButton=()=>{
              const btn=document.getElementById('showButton');
              const ele1=document.getElementById('res');

       if(btn.style.visibility=='visible'){
        btn.innerText='Show Answer';
        ele1.value='';
        if(context.exerciseCount>=1 && context.exerciseCount!=2 ){
          const ele2=document.getElementById('res1');
          ele2.value=''
        }
        if(context.exerciseCount>=3){
          const ele3=document.getElementById('res2');
      const ele4=document.getElementById('res3');
      const ele5=document.getElementById('res4');
          ele3.value=ele4.value=ele5.value=''
        }
        // enable the submit button
        document.getElementById('answerButton').style.visibility='visible';
        }else {
            // set the color of the answer box to gray 
            document.getElementById('ansBox').style.background='rgb(229 231 235)';
            btn.style.visibility='visible';
            document.getElementById('answerButton').innerText="Submit Answer"

        }

    }

  return (
    <div className='w-[13%] ml-4 bg-gray-100 h-[600px] '>
        <ul className='items-center  text-center '>
            <li className='text-base tracking-wide py-2 my-1 bg-black text-gray-200 hover:cursor-pointer'>
                Complete all exercise
            </li>
            <li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
                enableSubmitButton();
               context.changeExercise(0);
               context.setExerciseBackground(0)
            }} >
                Exercise 1
            </li>
            <li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
                enableSubmitButton();
               context.changeExercise(1)
               context.setExerciseBackground(1)
            }}>
                Exercise 2
            </li><li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
                enableSubmitButton();
               context.changeExercise(2)
context.setExerciseBackground(2)
            }}>
                Exercise 3
            </li><li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
                enableSubmitButton();
               context.changeExercise(3)
context.setExerciseBackground(3)
            }}>
                Exercise 4
            </li><li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
                enableSubmitButton();
               context.changeExercise(4)
               context.setExerciseBackground(4)
            }}>
                Exercise 5
            </li>
        </ul>
    </div>
  )
}

export default ExerciseBar
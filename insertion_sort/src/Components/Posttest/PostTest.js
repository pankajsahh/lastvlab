import React, { useState } from "react";
import './PostTest.css';
import crown from './crown.png'
import quiz from './quiz.png'
function PostTest() {

  // Question number to display in quiz box randomly 
  const[questionIndex,setQuestionIndex]=useState(0);
  let ch = <>
    <ul className="list-decimal list-inside">
      <li className="font-bold text-left text-lg">This quiz consists of seven questions.</li>
      <li className="font-bold text-left text-lg">Four options will be given to each question.</li>
      <li className="font-bold text-left text-lg">You cannot change your answer once it is selected.</li>
      <li className="font-bold text-left text-lg">You cannot move to next question before attempting the current question.</li>
      <li className="font-bold text-left text-lg">At the end of the quiz, your score will be displayed.</li>
      <li className="font-bold text-left text-lg">Move to next question by clicking "Next" button.</li>
      <li className="font-bold text-left text-lg">Restart the quiz by clicking "Try Again" button.</li>
      <li className="font-bold text-left text-lg">Start the quiz by clicking "Start Quiz" button.</li>

    </ul></>
  const question = [
    {
      questionText: ch,

      answersOptions: [
        { answerText: 'Start Quiz', isCorrect: true }
      ]
    }
    ,
    {
      questionText: 'What is the running time of insertion sort if the input is reverse-sorted?',
      answersOptions: [
        { answerText: 'O(N^2)', isCorrect: true },
        { answerText: 'O(N log N)', isCorrect: false },
        { answerText: 'O(N)', isCorrect: false },
        { answerText: 'O(M log N)', isCorrect: false },
      ],
    },
    {
      questionText: 'What will be the number of passes to sort the elements using insertion sort ? 14,12,16,6,3,10',
      answersOptions: [
        { answerText: '6', isCorrect: false },
        { answerText: '5', isCorrect: true },
        { answerText: '7', isCorrect: false },
        { answerText: '1', isCorrect: false },
      ],
    },

    {
      questionText: 'For the following question, how will the array elements look like after the first pass?  34,8,64,51,32,21',
      answersOptions: [
        { answerText: '8,21,32,34,51,64', isCorrect: false },
        { answerText: '8,32,34,51,64,21', isCorrect: false },
        { answerText: '8,34,51,64,32,21', isCorrect: false },
        { answerText: '8,34,64,51,32,21', isCorrect: true },
      ],
    },

    // Questions selected by Amites starts from here 
    {
      questionText: 'For the best case input, the running time of an insertion sort algorithm is?',
      answersOptions: [
        { answerText: 'Linear', isCorrect: true },
        { answerText: 'Binary', isCorrect: false },
        { answerText: 'Quadratic', isCorrect: false },
        { answerText: 'Depends on the input', isCorrect: false },
      ],
    },
    // {
    //   questionText: 'Consider the array A[]= {6,4,8,1,3} apply the insertion sort to sort the array . Consider the cost associated with each sort is 25 rupees , what is the total cost of the insertion sort when element 1 reaches the first position of the array  ?',
    //   answersOptions: [
    //     { answerText: '50', isCorrect: true },
    //     { answerText: '25', isCorrect: false },
    //     { answerText: '75', isCorrect: false },
    //     { answerText: '100', isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: ' The worst-case time complexity of insertion sort is O(n2). What will be the worst-case time complexity of insertion sort if the correct position for inserting element is calculated using binary search?',
    //   answersOptions: [
    //     { answerText: 'O(nlogn)', isCorrect: false },
    //     { answerText: 'O(n^2)', isCorrect: true },
    //     { answerText: 'O(n)', isCorrect: false },
    //     { answerText: 'O(logn)', isCorrect: false },
    //   ],
    // },
    {
      questionText: 'Consider an array of length 5,arr[5]={9,7,4,2,1}. What are the step of insertions done while running insertion sort on the array?',
      answersOptions: [
        { answerText: '74219 42197 21947 19472', isCorrect: false },
        { answerText: '79421 47921 24791 12479', isCorrect: true },
        { answerText: '97412 97124 91247 12479', isCorrect: false },
        { answerText: '79421 24791 47921 12479', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following real examples is based on insertion sort?',
      answersOptions: [
        { answerText: 'arranging a pack of playing cards', isCorrect: true },
        { answerText: 'database scenarios and distributes scenarios', isCorrect: false },
        { answerText: 'arranging books on a library shelf', isCorrect: false },
        { answerText: 'real-time systems', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is correct with regard to insertion sort?',
      answersOptions: [
        { answerText: 'Insertion sort is stable and it sorts In-place', isCorrect: true },
        { answerText: 'Insertion sort is stable and it does not sort In-place', isCorrect: false },
        { answerText: 'Insertion sort is unstable and it does not sort In-place', isCorrect: false },
        { answerText: 'Insertion sort is unstable and it sorts In-place', isCorrect: false },
      ],
    }
    // {
    //   questionText: 'A queue is implemented using an array such that ENQEUE and DEQUEUE operations are performed efficiently. Which one of the following statements is correct (n refers to the number of items in the queue)?',
    //   answersOptions: [
    //     { answerText: 'The worst-case time complexity for both operations will be Ω(n)', isCorrect: false },
    //     { answerText: 'Worst-case time complexity for both operations will be Ω(log n)', isCorrect: false },
    //     { answerText: 'At most one operationcan be performed in O(1) time but the worst case time for the other operation will be Ω(n)', isCorrect: false },
    //     { answerText: 'Both operations can be performed in O(1) time', isCorrect: true },
    //   ],
    // },
    // Ends here
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setScore] = useState(false);
  const [score, setfinalScore] = useState(0);
  const [visiblity, setVisiblity] = useState('invisible');

  // handle selected answer 
  const handleButtonClick = (isCorrect, ind) => {
    // console.log("id is ",ind.target.id)

    // enable next button after answer selection 
    const nxtButton=document.getElementById('nxt');
    nxtButton.disabled=false;
    nxtButton.style.opacity=5;

    // disable options once one is selected 
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.disabled = true)

    if (isCorrect === true) {
      setfinalScore(score + 1);
      document.getElementById(ind.target.id).style.backgroundColor = "Green";
    } else document.getElementById(ind.target.id).style.backgroundColor = "Red";

    // mark the correct option on selection of wrong answer 
    question[questionIndex].answersOptions.filter((value, index) => {
      if (value.isCorrect) {
        document.getElementById(index).style.backgroundColor = "Green"
      }
    })

    if (currentQuestion == 0) {
      nextQue(); //In case of start quiz ,auto move to next 
    }

  }
  // move to next question 
  const nextQue = async() => {
   
        // enable the option selection 
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.disabled = false)

    // set bg colour of all the options to the default 
    if (currentQuestion != 0) {
      document.getElementById(0).style.backgroundColor = "#252d4a";
      document.getElementById(1).style.backgroundColor = "#252d4a";
      document.getElementById(2).style.backgroundColor = "#252d4a";
      document.getElementById(3).style.backgroundColor = "#252d4a";
      // document.querySelectorAll('.btn').disabled=false;

    } else document.getElementById(0).style.backgroundColor = "#252d4a";

    if (currentQuestion == 0) {
      setVisiblity('visible')
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
         generateQuestion();
      setCurrentQuestion(nextQuestion);

    } else {
      setScore(true);
    }
    // disable next button before answer selection 
    const nxtButton=document.getElementById('nxt');
    nxtButton.disabled=true;
    nxtButton.style.opacity=0.5;
  }

  // function to restart the quiz 
  const restart = () => {
    setScore(false);
    setCurrentQuestion(0);
    setfinalScore(0);
    setVisiblity('invisible');
    setQuestionIndex(0);
    setQuestionArray([]);
  }

  // Generate random question index
  // Array that keeps the generated question index to make sure no index is generated twice
  const [questionArray,setQuestionArray] =useState([]);
  // helper function that 
  const generateQuestion =async()=>{
    
    const length=question.length-1;
    const ind=Math.floor((Math.random()*length)+1);
    console.log("Generated index is",questionArray);
    console.log("Current generated index is",ind)
    if(questionArray.includes(ind)){
    console.log("hello I am again here.")
      return generateQuestion();
    }else{console.log("New entry found.")
    questionArray.push(ind);
    setQuestionArray(questionArray)
    console.log("Generated question index is ",questionArray)
   
     setQuestionIndex(ind);}
  }
  return (
    <div className="main">
      <div className='appTest bg-gradient-to-r from-sky-500 to-indigo-500'>
        {showScore ? (
          <>
            <div className='score-Section'>
              <div>
                <img src={crown} alt="Can't load." className="pl-10"></img>
                <p> You scored {score - 1} out of {question.length - 1}</p></div>

            </div>
            <div className="float-right ml-12">
              <button className="w-max h-max text-white bg-blue-900 rounded-2xl border-4 p-2 border-blue-500 hover:opacity-50 px-2 shadow-emerald-500" onClick={restart}>Try Again</button>
            </div>
          </>


        ) : (
          <>

            <div className='question-section text-lg'>
              <div className={visiblity} id="question-count">
                <span >Question{currentQuestion}</span>/{question.length - 1}
              </div>

              <div className='question-text'>{question[questionIndex].questionText}</div>
            </div>

            <div className='answer-section'>
              {question[questionIndex].answersOptions.map((answersOption, index) => (

                <button className="btn" key={index} id={index} onClick={(event) => handleButtonClick(answersOption.isCorrect, event)}>{answersOption.answerText}</button>))}
              <button className={visiblity} id="nxt" onClick={nextQue}>Next</button>
            </div>


          </>
        )}
      </div>
      <img className="float-right" src={quiz} alt="Can't load."></img>

    </div>
  );
}

export default PostTest;
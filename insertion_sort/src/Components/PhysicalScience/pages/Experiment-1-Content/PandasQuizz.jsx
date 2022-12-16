import React, { useState } from 'react';
import './Quizz.css'
export default function App() {
	const questions = [
		{
			questionText: 'A collection of observations obtained through repeated measurements over time is?',
			answerOptions: [
				{ answerText: 'DataFrame', isCorrect: false },
				{ answerText: 'series', isCorrect: true },
				{ answerText: 'data science', isCorrect: false },
				{ answerText: 'pandas', isCorrect: false },
			],
		},
		
		{
			questionText: ' In 2-D array, mean of elements across the column can be computed as: ',
			answerOptions: [
				{ answerText: 'arb.sort(axis=1)', isCorrect: false },
				{ answerText: 'arb.mean()', isCorrect: false },
				{ answerText: 'arb.mean(axis=0)', isCorrect: true },
				{ answerText: 'arb.mean(axis=1)', isCorrect: false },
			],
		},


		
		
		{
			questionText: 'Drop in dataframe',
			answerOptions: [
				{ answerText: 'operates on columns only.', isCorrect: false },
				{ answerText: 'operates on rows only.', isCorrect: false },
				{ answerText: 'operates on both rows and columns.', isCorrect: true },
				{ answerText: 'do not operate anything ', isCorrect: false },
			],
		},
		{
			questionText: 'Delete in dataframe',
			answerOptions: [
				{ answerText: 'operates on columns only.', isCorrect: false },
				{ answerText: 'operates on rows only.', isCorrect: false },
				{ answerText: 'operates on both rows and columns.', isCorrect: false },
				{ answerText: 'does nothing', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const HandelReset = ()=>{
		
		setShowScore(false);
		setCurrentQuestion(0);
		setScore(0);
}
	return (
		<div className="Quiz">
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<p>You scored {score} out of {questions.length}</p>	
					<button onClick={HandelReset} className='exp-button Quizreset'>restart</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}

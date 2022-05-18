import React, { useEffect, useState } from 'react'
import "./quiz.css"
export default function Quiz() {
	// Properties
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
  
	const questions = [
	  {
		text: "Who is prime minister of India ?",
		options: [
		  { id: 0, text: "Rahul Gandhi", isCorrect: false },
		  { id: 1, text: "Arvind Kejriwal", isCorrect: false },
		  { id: 2, text: "Amit Shaha", isCorrect: false },
		  { id: 3, text: "Narendra Modi", isCorrect: true },
		],
	  },
	  {
		text: "When was the Kargil War ?",
		options: [
		  { id: 0, text: "1999", isCorrect: true },
		  { id: 1, text: "1954", isCorrect: false },
		  { id: 2, text: "1968", isCorrect: false },
		  { id: 3, text: "1971", isCorrect: false },
		],
	  },
	  {
		text: "Who is India's first Paramvir Chakra Winner ?",
		options: [
		  { id: 0, text: "Major Somnath Sharma", isCorrect: true },
		  { id: 1, text: "Captain Vikram Bantra", isCorrect: false },
		  { id: 2, text: "Manoj Kumar Pandey", isCorrect: false },
		  { id: 3, text: "Subhedar Yogendra Yadav", isCorrect: false },
		],
	  },
	  {
		text: "Who is mssile Man of India ?",
		options: [
		  { id: 0, text: "Vikram Sarabhai", isCorrect: false },
		  { id: 1, text: "Dr APJ Abdul Kalam", isCorrect: true },
		  { id: 2, text: "Pandir Nehru", isCorrect: false },
		  { id: 3, text: "Kalpna Chavla", isCorrect: false },
		],
	  },
	  {
		text: "Who is India's First Indian Army Chief ?",
		options: [
		  { id: 0, text: "Bipin Rawat", isCorrect: false },
		  { id: 1, text: "K. M. Cariappa", isCorrect: true },
		  { id: 2, text: "Manoj Pandey", isCorrect: true },
		  { id: 3, text: "Sam Manik Shaw", isCorrect: false },
		],
	  },
	];
  
	const optionClicked = (isCorrect) => {
	  if (isCorrect) {
		setScore(score + 1);
	  }
	  if(isCorrect==null){
		setCurrentQuestion(currentQuestion+1);
	  }
  
	  if (currentQuestion + 1 < questions.length) {
		setCurrentQuestion(currentQuestion + 1);
	  } else {
		setShowResults(true);
	  }
	};
  
	const restartGame = () => {
	  setScore(0);
	  setCurrentQuestion(0);
	  setShowResults(false);
	};
	
	return (
	  <div className="App">
		<h1>Quiz on India</h1>
  
		<h2>Score: {score}</h2>
  
		{showResults ? (
		  <div className="final-results">
			<h1>Final Results</h1>
			<h2>
			  {score} out of {questions.length} correct - (
			  {(score / questions.length) * 100}%)
			</h2>
			<button onClick={() => restartGame()}>Restart game</button>
		  </div>
		) : (
		  <div className="question-card">
			<h2>
			  Question: {currentQuestion + 1} out of {questions.length}
			</h2>
			<h3 className="question-text">{questions[currentQuestion].text}</h3>
			<ul>
			  {questions[currentQuestion].options.map((option) => {
				return (
				  <li
					key={option.id}
					onClick={() => optionClicked(option.isCorrect)}
				  >
					{option.text}
				  </li>
				);
			  })}
			</ul>
		  </div>
		)}
	  </div>
	);
  }

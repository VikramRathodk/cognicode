import React, { useState, useEffect } from "react";
import "./quizzes.css"; // Import your CSS file
import QuizHistory from "./quizeHistory";
import { FaClock } from "react-icons/fa"; // Import the clock icon from a library

const Quizzes = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizHistory, setQuizHistory] = useState([]);
  const [remainingTime, setRemainingTime] = useState(10); // Time in seconds for demonstration purposes

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Layer",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML tag is used to create an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correctAnswer: "<ul>",
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      options: ["font-family", "text-font", "font-style", "font-type"],
      correctAnswer: "font-family",
    },
    {
      question: "Which of the following is NOT a CSS selector?",
      options: ["class", "id", "element", "attribute"],
      correctAnswer: "attribute",
    },
    {
      question:
        "What is the purpose of media queries in responsive web design?",
      options: [
        "To add animations",
        "To load images",
        "To create interactive forms",
        "To adapt the layout based on screen size",
      ],
      correctAnswer: "To adapt the layout based on screen size",
    },
    // Add more questions related to web design here...
  ];

  const handleAnswerSelect = (selectedOption) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedOption;
      return newAnswers;
    });
  };

  const evaluateAnswers = () => {
    let currentScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setShowResults(true);
    addToQuizHistory(currentScore);
  };

  const addToQuizHistory = (currentScore) => {
    const quizAttempt = {
      score: currentScore,
      totalQuestions: questions.length,
      questions: questions.map((question, index) => ({
        question: question.question,
        userAnswer: selectedAnswers[index],
        correctAnswer: question.correctAnswer,
      })),
    };
    setQuizHistory((prevHistory) => [...prevHistory, quizAttempt]);
  };

  const handleRetryQuiz = () => {
    setSelectedAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setRemainingTime(10);
  };
  useEffect(() => {
    if (remainingTime > 0 && !showResults) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
    // else if (!showResults) {
    //   handleNextQuestion();
    // }
  }, [remainingTime, showResults]);

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setRemainingTime(10);
    } else {
      evaluateAnswers();
    }
  };

  return (
    <div className="quizzes">
      {showResults ? (
        <div>
          {/* <h3>Your Score: {score}/{questions.length}</h3> */}
          <button onClick={handleRetryQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div>
          <div className={`timer ${remainingTime === 0 ? "timer-zero" : ""}`}>
            <FaClock className="timer-icon" />
            <p>Time Left : {remainingTime} sec</p>
          </div>

          <div className="question-container">
            <span>
              Q{currentQuestionIndex + 1}.
              {questions[currentQuestionIndex].question}
            </span>
            <ul>
              {questions[currentQuestionIndex].options.map(
                (option, optionIndex) => (
                  <li
                    key={optionIndex}
                    onClick={() => handleAnswerSelect(option)}
                    className={
                      selectedAnswers[currentQuestionIndex] === option
                        ? option ===
                          questions[currentQuestionIndex].correctAnswer
                          ? "correct"
                          : "incorrect"
                        : ""
                    }
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="button-container">
            <button onClick={handlePreviousQuestion}>Previous Question</button>
            <button onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      )}
      {showResults && <QuizHistory quizData={quizHistory} />}
    </div>
  );
};

export default Quizzes;

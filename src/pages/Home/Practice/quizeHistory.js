import React from 'react';
import './quizHistory.css'; // Import your CSS file

const QuizHistory = ({ quizData }) => {
  return (
    <div className="quiz-history">
      <h2>Quiz History and Analysis</h2>
      {quizData.map((quiz, index) => (
        <div key={index} className="quiz-result">
          <h3>Quiz {index + 1}</h3>
          <p>Score: {quiz.score}/{quiz.questions.length}</p>
          <div className="question-analysis">
            {quiz.questions.map((question, qIndex) => (
              <div key={qIndex} className="question-analysis-item">
                <p>{question.question}</p>
                <p>Selected Answer: {question.userAnswer}</p>
                <p>
                  Correct Answer: {question.correctAnswer}
                  {question.userAnswer === question.correctAnswer ? (
                    <span className="answer-feedback correct-answer">✓ Correct</span>
                  ) : (
                    <span className="answer-feedback incorrect-answer">✗ Incorrect</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizHistory;


import React from "react";

const CodingChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Reverse a String",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "FizzBuzz",
      difficulty: "Medium",
    },
    // Add more challenges
  ];

  return (
    <section className="coding-challenges-section">
      <h2>Coding Challenges</h2>
      <div className="challenges">
        {challenges.map((challenge) => (
          <div className="challenge" key={challenge.id}>
            <h3>{challenge.title}</h3>
            <p>Difficulty: {challenge.difficulty}</p>
            <button className="start-challenge-btn">Start Challenge</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingChallenges;

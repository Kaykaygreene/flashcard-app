import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <h3>Question</h3>
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <h3>Answer</h3>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

// src/App.js
import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

const App = () => {
  const flashcards = [
    { question: "How Does The Internet Work?", answer: "The internet is a global network connecting computers and devices for information sharing." },
    { question: "What is HTTP?", answer: "HTTP enables browser-server communication through requests and responses." },
    { question: "What is a domain name?", answer: "Domain names are human-friendly web addresses (e.g., google.com) substituting numerical IP addresses." },
    { question: "What is hosting?", answer: "Web hosting stores website files on servers, making sites accessible online." },
    { question: "What is DNS?", answer: "Domain Name System translates human-readable domain names into IP addresses through a global, decentralized server network." },
    { question: "What is Repository hosting services", answer: "Repository hosting services provide platforms for storing, managing, and collaborating on software projects using Git version control" },
    { question: "What is HTML?", answer: "Hypertext Markup Language is the standard for creating web pages, structuring content with elements and attributes." },
    { question: "List examples of Repository hosting services?", answer: "GitHub, GitLab and Bitbucket." },
    { question: "What is CSS?", answer: "Cascading Style Sheets styles HTML documents, controlling layout, colors, and fonts." },
    { question: "List examples of modern CSS?", answer: "Modern CSS includes Flexbox, Grid, animations, and transitions." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? flashcards.length - 1 : prev - 1
    );
  };

  return (
    <div className="app-container">
      <h1>Flashcards</h1>
      <ProgressBar current={currentIndex + 1} total={flashcards.length} />
      <Flashcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
      />
      <div className="navigation">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>
        Card {currentIndex + 1} of {flashcards.length}
      </p>
    </div>
  );
};

export default App;

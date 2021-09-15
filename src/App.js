import React, { useState, useEffect } from "react";
import "./App.css";

import Scoreboard from "./components/Scoreboard";
import Result from "./components/Result";
import Choices from "./components/Choices";

const App = () => {
  const [result, setResult] = useState("Do you dare?");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [counter, setCounter] = useState(0);

  const smallUserWord = "(user)";
  const smallCompWord = "(comp)";

  useEffect(() => {
    getCompChoice();
  }, [counter]);

  useEffect(() => {
    game();
  }, [compChoice]);

  const getCompChoice = () => {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    setCompChoice(choices[randomNumber]);
  };

  const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
  };

  const win = () => {
    setUserScore(userScore + 1);
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(
        compChoice
      )}${smallCompWord}`
    );
  };

  const lose = () => {
    setCompScore(compScore + 1);
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(
        compChoice
      )}${smallCompWord}`
    );
  };

  const draw = () => {
    setResult(`DRAW`);
  };

  const game = () => {
    switch (userChoice + compChoice) {
      case "rs":
      case "pr":
      case "sp":
        win();
        break;
      case "sr":
      case "rp":
      case "ps":
        lose();
        break;
      case "ss":
      case "rr":
      case "pp":
        draw();
        break;
    }
  };

  return (
    <div>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <Scoreboard userScore={userScore} compScore={compScore} />
      <Result result={result} />
      <Choices
        setUserChoice={setUserChoice}
        setCounter={setCounter}
        counter={counter}
      />
    </div>
  );
};

export default App;

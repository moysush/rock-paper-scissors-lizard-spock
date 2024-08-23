import { useState, useEffect } from "react";
import "./App.css";
import Game from "./Game.jsx";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const initialUserScore = sessionStorage.getItem("userScore") || 0;
    const initialComputerScore = sessionStorage.getItem("computerScore") || 0;

    setUserScore(Number(initialUserScore));
    setComputerScore(Number(initialComputerScore));
  }, []);

  const updateScore = (winner) => {
    if (winner === "user") {
      const newUserScore = userScore + 1;
      setUserScore(newUserScore);
      sessionStorage.setItem("userScore", newUserScore);
    } else if (winner === "computer") {
      const newComputerScore = computerScore + 1;
      setComputerScore(newComputerScore);
      sessionStorage.setItem("computerScore", newComputerScore);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <header className="border-4 rounded-lg border-[#606E84] p-4 flex justify-between">
        <div className="logo p-4">
          <img
            src="./images/logo-bonus.svg"
            alt="Rock, Paper, Scissors, Lizard, Spock logo"
          />
        </div>
        <div className="Score text-center max-[390px]:px-3 max-[430px]:px-6 px-10 bg-white rounded-lg text-black">
          <h2 className="text-xl uppercase text-[#3B52C4] font-bold mt-6 tracking-wide">
            Score
          </h2>
          <p className="text-xl uppercase text-[#2A3959] tracking-wide">
            You: <span className="text-2xl font-bold">{userScore}</span>
          </p>
          <p className="text-xl uppercase text-[#2A3959] tracking-wide">
            House: <span className="text-2xl font-bold">{computerScore}</span>
          </p>
        </div>
      </header>
      <main className="flex-grow max-[440px]:w-64 w-96 mx-auto mt-20">
        <Game
          userScore={userScore}
          computerScore={computerScore}
          updateScore={updateScore}
        />
      </main>
      <footer
        className={`fixed inset-0 flex justify-center items-center z-50 ${
          showRules ? "block" : "hidden"
        }`}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-16 rounded-lg">
            <button
              className="absolute top-2 left-2 text-xl dark:bg-gray-400 bg-gray-300"
              onClick={() => setShowRules(false)}
            >
              RULES
            </button>
            <button
              className="absolute top-2 right-2 text-xl dark:bg-gray-400 bg-gray-300"
              onClick={() => setShowRules(false)}
            >
              &times;
            </button>
            <img
              src="./images/image-rules-bonus.svg"
              className="w-full max-w-md"
              alt="Rules"
            />
          </div>
        </div>
      </footer>
      <div className="text-center">
        <button
          className="uppercase mt-[2rem] mb-[5rem]"
          onClick={() => setShowRules(!showRules)}
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>
    </div>
  );
}

export default App;

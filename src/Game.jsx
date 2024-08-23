import { useState } from "react";

function Game({ userScore, computerScore, updateScore }) {
  const [user, setUser] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showComputerChoice, setShowComputerChoice] = useState(false);

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  const choiceImages = {
    rock: "/images/icon-rock.svg",
    paper: "/images/icon-paper.svg",
    scissors: "/images/icon-scissors.svg",
    lizard: "/images/icon-lizard.svg",
    spock: "/images/icon-spock.svg",
  };

  function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function logic(userChoice) {
    const computer = getRandomChoice();
    setUser(userChoice);
    setComputerChoice(""); // Reset computer choice immediately
    setShowComputerChoice(false); // Hide computer choice initially
    
    // Show computer's choice after 1 second
    setTimeout(() => {
      setComputerChoice(computer);
      setShowComputerChoice(true);

      // Determine result after 1 more second
      setTimeout(() => {
        if (
          (userChoice === "paper" &&
            (computer === "rock" || computer === "spock")) ||
          (userChoice === "scissors" &&
            (computer === "paper" || computer === "lizard")) ||
          (userChoice === "spock" &&
            (computer === "scissors" || computer === "rock")) ||
          (userChoice === "lizard" &&
            (computer === "spock" || computer === "paper")) ||
          (userChoice === "rock" &&
            (computer === "scissors" || computer === "lizard"))
        ) {
          setResult("YOU WIN");
          updateScore("user");
        } else if (userChoice === computer) {
          setResult("TIE");
        } else {
          setResult("YOU LOSE");
          updateScore("computer");
        }
        setShowResult(true);
      }, 200); // Show result after 1 second
    }, 200); // Show computer choice after 1 second
  }

  function handleClick(choice) {
    setUser(choice);
    logic(choice);
  }

  return (
    <>
      {showResult ? (
        <div className="result">
          <div className="flex justify-between gap-10">
            <p
              className={`text-white uppercase text-2xl mt-8 transition-opacity duration-500 ease-in ${
                result ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`tracking-wide ${user} max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex justify-center items-center mx-auto bg-white max-[440px]:border-[0.6rem] border-[0.9rem] rounded-full mb-8`}>
                <img
                  src={choiceImages[user]}
                  alt={user}
                  className="p-5"
                />
              </div>
              You picked
            </p>
            {showComputerChoice && (
              <p
                className={`animate-pulse text-white uppercase text-2xl mt-8 transition-opacity duration-500 ease-in ${
                  showComputerChoice ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className={`tracking-wide ${computerChoice} max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex justify-center items-center mx-auto bg-white max-[440px]:border-[0.6rem] border-[0.9rem] rounded-full mb-8`}>
                  <img
                    src={choiceImages[computerChoice]}
                    alt={computerChoice}
                    className="p-5"
                  />
                </div>
                The house picked
              </p>
            )}
          </div>
          <p
            className={`text-white text-6xl mt-24 transition-opacity duration-500 ease-in ${
              result ? "opacity-100" : "opacity-0"
            }`}
          >
            {result}
          </p>
          <button
            className="animate-bounce mt-10 tracking-wide font-bold"
            onClick={() => {
              setShowResult(false);
              setUser("");
              setComputerChoice("");
              setResult("");
              setShowComputerChoice(false); // Ensure the computer choice is hidden
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <div className="list mx-auto">
          <div className="pentagon flex justify-center">
            <img
              src="/images/bg-pentagon.svg"
              className="absolute z-[-1] mt-12 max-[440px]:w-56"
              alt=""
            />
          </div>

          <div className="scissors hover:scale-105 max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex justify-center items-center mx-auto bg-white border-[0.9rem] max-[440px]:border-[0.6rem] rounded-full">
            <button
              onClick={() => handleClick("scissors")}
              className="bg-transparent border-none cursor-pointer"
            >
              <img src={choiceImages.scissors} alt="Scissors" className="max-[440px]:scale" />
            </button>
          </div>

          <div className="flex justify-between">
            <div className="spock hover:scale-105 max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex ms-[-1rem] justify-center items-center mx-auto bg-white border-[0.9rem] max-[440px]:border-[0.6rem] rounded-full">
              <button
                onClick={() => handleClick("spock")}
                className="bg-transparent border-none cursor-pointer"
              >
                <img src={choiceImages.spock} alt="Spock" className="max-[440px]:scale" />
              </button>
            </div>

            <div className="paper hover:scale-105 max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex  me-[-1rem] justify-center items-center mx-auto bg-white border-[0.9rem] max-[440px]:border-[0.6rem] rounded-full">
              <button
                onClick={() => handleClick("paper")}
                className="bg-transparent border-none cursor-pointer"
              >
                <img src={choiceImages.paper} alt="Paper" className="max-[440px]:scale" />
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <div className="lizard hover:scale-105 max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex justify-center items-center mx-auto bg-white border-[0.9rem] max-[440px]:border-[0.6rem] rounded-full">
              <button
                onClick={() => handleClick("lizard")}
                className="bg-transparent border-none cursor-pointer"
              >
                <img src={choiceImages.lizard} alt="Lizard" className="max-[440px]:scale" />
              </button>
            </div>

            <div className="rock hover:scale-105 max-[440px]:w-24 max-[440px]:h-24 w-32 h-32 flex justify-center items-center mx-auto bg-white border-[0.9rem] max-[440px]:border-[0.6rem] rounded-full">
              <button
                onClick={() => handleClick("rock")}
                className="bg-transparent border-none cursor-pointer"
              >
                <img src={choiceImages.rock} alt="Rock" className="max-[440px]:scale" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;





import { useState } from "react";
import { languages } from "./languages";
import { getFarewellText, generateNewWord } from "./utils";

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState(() => generateNewWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  function getLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(
    (incorrectLetter) => !currentWord.includes(incorrectLetter)
  ).length;
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  return (
    <main>
      <header className="text-center mb-4">
        <h2 className="text-lg font-semibold mb-2 text-white">
          Assembly: Endgame
        </h2>
        <p className="font-medium text-[#f9f4da]">
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly
        </p>
      </header>
      <section
        className={`${isGameWon && "bg-[#10A95B]"} ${
          isGameLost && "bg-red-500"
        } ${
          !isGameOver && isLastGuessIncorrect && "bg-[#7a5ea7]"
        } flex items-center justify-center h-14.5 rounded-md`}
        aria-live="polite"
        role="status"
      >
        {!isGameOver && isLastGuessIncorrect && (
          <div className="flex items-center flex-col">
            {/* purple-bg [#7a5ea7] */}
            <h1 className="font-semibold text-lg text-white">
              {getFarewellText(languages[wrongGuessCount - 1].name)}
            </h1>
          </div>
        )}
        {isGameWon && (
          <div className="flex items-center flex-col">
            <h1 className="font-semibold text-lg mb-1.5 text-white">
              You win!
            </h1>
            <h2 className="font-medium">Well done</h2>
          </div>
        )}
        {isGameLost && (
          <div className="flex items-center flex-col">
            <h1 className="font-semibold text-lg mb-1.5 text-white">
              You Lose!
            </h1>
            <h2 className="font-medium">
              You fool, Better start learning Assembly
            </h2>
          </div>
        )}
      </section>
      <div className="max-w-[350px] justify-center flex-wrap mx-auto flex mt-4 gap-1.5">
        {languages.map((language, index) => {
          const isLanguageLost = index < wrongGuessCount;
          return (
            <p
              key={language.name}
              className={`p-1 relative rounded-xs ${isLanguageLost && "lost"}`}
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}
            >
              {language.name}
            </p>
          );
        })}
      </div>
      <div className="flex gap-0.5 items-center justify-center my-4">
        {currentWord.split("").map((word, index) => {
          const isShowing = guessedLetters.includes(word) ? word : "";
          return (
            <span
              key={index}
              className="w-[26px] h-[41px] border-b border-b-[#ffffff] bg-[#323232] flex items-center justify-center"
            >
              {isShowing.toUpperCase()}
            </span>
          );
        })}
      </div>

      {/* for the visually impaired */}
      <div className="sr-only" aria-label="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word`}
          you have {numGuessesLeft} left
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </div>
      <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-2 place">
        {alphabet.split("").map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = isGuessed && currentWord.includes(letter);
          const isWrong = isGuessed && !currentWord.includes(letter);

          const checkingCorrect = () => {
            if (isCorrect) {
              return "bg-green-600";
            } else if (isWrong) {
              return "bg-red-500";
            }
          };

          return (
            <button
              key={letter}
              className={`px-3 py-2 rounded-sm bg-[#fcba29] border border-[#d7d7d7] text-black cursor-pointer w-12 h-12 ${checkingCorrect()} disabled:cursor-not-allowed disabled:opacity-[0.5]`}
              onClick={() => getLetter(letter)}
              disabled={isGameOver}
              aria-disabled={guessedLetters.includes(letter)}
              aria-label={`Letter ${letter}`}
            >
              {letter.toUpperCase()}
            </button>
          );
        })}
      </div>
      {isGameLost ||
        (isGameWon && (
          <button className="bg-sky-400 w-48 mx-auto text-black font-medium cursor-pointer rounded-sm h-10 mt-5 flex items-center justify-center border border-[#d7d7d7]">
            New Game
          </button>
        ))}
    </main>
  );
};

export default AssemblyEndgame;

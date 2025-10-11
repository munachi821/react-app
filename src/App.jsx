import { useState } from "react";
import { languages } from "./languages.js";

const AssemblyEndgame = () => {
  //const [gameStatus, setGameStatus] = useState("Game won");
  const [currentWord, setCurrentWord] = useState("react");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const currentWordArr = () => {
    return currentWord.split("");
  };
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
      <section className="bg-[#10A95B] flex items-center justify-between h-fit flex-col">
        <h1 className="font-semibold text-lg mb-1.5 text-white">You win!</h1>
        <h2 className="font-medium">Well done</h2>
      </section>
      <div className="max-w-[350px] justify-center flex-wrap mx-auto flex mt-4 gap-1.5">
        {languages.map((language) => (
          <p
            key={language.name}
            className="p-1 rounded-xs"
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </p>
        ))}
      </div>
      <div className="flex gap-0.5 items-center justify-center my-4">
        {currentWordArr().map((word, index) => (
          <span
            key={index}
            className="p-2 border-b border-b-[#ffffff] bg-[#323232]"
          >
            {word.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-2 place">
        {alphabet.split("").map((letters) => (
          <button
            key={letters}
            className="px-3 py-2 rounded-sm bg-[#fcba29] border border-[#d7d7d7] text-black cursor-pointer w-12 h-12"
          >
            {letters.toUpperCase()}
          </button>
        ))}
      </div>
      <button className="bg-sky-400 w-48 mx-auto text-black font-medium cursor-pointer rounded-sm h-10 mt-5 flex items-center justify-center border border-[#d7d7d7]">
        New Game
      </button>
    </main>
  );
};

export default AssemblyEndgame;

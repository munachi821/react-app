import { useEffect, useRef, useState } from "react";
import "./App.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
const App = () => {
  const [dice, setDice] = useState(() => generateAllNewDice());
  let gamewon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const buttonRef = useRef(null);
  useEffect(() => {
    if (gamewon) {
      buttonRef.current.focus();
    }
  }, [gamewon]);

  function rollDice() {
    if (!gamewon) {
      setDice((oldDice) =>
        oldDice.map((dice) =>
          dice.isHeld === true
            ? dice
            : { ...dice, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  }

  //const diceElements = dice.map((num) => <Die value={num} />);
  return (
    <main className="bg-black flex items-center justify-center h-screen p-4">
      {gamewon && <ReactConfetti />}
      <div className="bg-[#f5f5f5] w-full h-full rounded-xl flex items-center justify-center flex-col">
        <div className="grid grid-cols-5 mx-auto gap-7">
          {dice.map((num) => (
            <Die
              key={num.id}
              value={num.value}
              isHeld={num.isHeld}
              hold={() => hold(num.id)}
            />
          ))}
        </div>
        <button
          className="bg-[#5035ff] text-white px-11 py-2.5 rounded-md mt-6 cursor-pointer"
          onClick={rollDice}
          ref={buttonRef}
        >
          {gamewon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
};

export default App;

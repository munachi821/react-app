import { useState } from "react";
import "./App.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
const App = () => {
  const [dice, setDice] = useState(generateAllNewDice());
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.isHeld === true
          ? dice
          : { ...dice, value: Math.ceil(Math.random() * 6) }
      )
    );
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
          onClick={() => rollDice()}
        >
          Roll
        </button>
      </div>
    </main>
  );
};

export default App;

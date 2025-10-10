import { useState } from "react";
import "./App.css";
import Die from "./Components/Die";
const App = () => {
  const [tennumbers, setTenNumbers] = useState(generateAllNewDice());
  function generateAllNewDice() {
    let randomNum = new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6));

    let objNum = randomNum.map((num) => ({
      value: num,
      isHeld: false,
    }));
    return objNum;
  }

  function rollDice() {
    setTenNumbers(generateAllNewDice());
    console.log(tennumbers);
  }

  //const diceElements = tennumbers.map((num) => <Die value={num} />);
  return (
    <main className="bg-black flex items-center justify-center h-screen p-4">
      <div className="bg-[#f5f5f5] w-full h-full rounded-xl flex items-center justify-center flex-col">
        <div className="grid grid-cols-5 mx-auto gap-7">
          {tennumbers.map((num) => (
            <Die value={num.value} />
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

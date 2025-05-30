import React from "react";
export default function Joke(props) {
  const [isShown, setisShown] = React.useState(false);
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  function changeFunc() {
    setisShown((shown) => !shown);
  }
  console.log(isShown);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={changeFunc} className="border border-black">
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </div>
  );
}

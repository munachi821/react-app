import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <Header /> */}
      <main className="container">
        <button onClick={() => setShow(!show)}>Toggle WindowTracker</button>
        {show && <Main />}
      </main>
    </>
  );
};

export default App;

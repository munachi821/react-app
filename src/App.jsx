/* import Header from "./Components/Header";
import Main from "./Components/Main";
const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
 */

import { useState } from "react";
import padsData from "./Components/pads";
import "./Components/index.css";
import Pad from "./Components/Pad";

export default function App() {
  const [pads, setPads] = useState(padsData);
  const buttonElements = pads.map((pad) => (
    <Pad keys={pad.id} color={pad.color} ison={pad.on} />
  ));
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

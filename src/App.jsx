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

/* import Joke from "./Components/Joke";
import jokesData from "./Components/jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
 */

import React from "react";
export default function App() {
  const [messages, setMessages] = React.useState(["a", "b"]);
  function checkMessages() {
    if (messages.length === 0) {
      return "You're all caught up!";
    } else if (messages.length === 1) {
      return "You have 1 unread message";
    } else if (messages.length > 1) {
      return `You have ${messages.length} unread messages`;
    }
  }
  return (
    <div>
      <h1>{checkMessages()}</h1>
    </div>
  );
}

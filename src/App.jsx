import reactLogo from "./assets/react.svg";

const MainBody = () => {
  return (
    <main>
      <img src={reactLogo} alt="react logo" />
      <h1>Fun facts about react</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by jordan walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

const App = () => {
  return <MainBody />;
};

export default App;

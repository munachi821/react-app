import reactLogo from "./assets/react.svg";
import { Fragment } from "react";

/* const MainBody = () => {
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
}; */

const Header = () => {
  return (
    <header>
      <img src={reactLogo} alt="react logo" width="50px" />
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <h1>Reasons I'm excited to learn react</h1>
      <ol>
        <li>I'll finally be able to call myself a frontend developer</li>
        <li>I'll be able to get more jobs</li>
        <li>I'll be able to showcase my skills</li>
        <li>Other devs won't look down on me</li>
      </ol>
    </main>
  );
};

const Footer = () => {
  return <footer>c 20xx Onyebuchi development. All rights reserved.</footer>;
};

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;

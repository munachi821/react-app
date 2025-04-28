//import reactLogo from "./assets/react.svg";
import Header from "./Header";
import MainContent from "./Maincontent";
import Footer from "./footer";

/* const MainBody = () => {
  return (
    <main>
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

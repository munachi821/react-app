//import Main from "./Components/Main";
//import JokesData from "./jokesData";
//import Joke from "./Components/joke";
import Header from "./Components/Header";
import Entry from "./Components/entry";
import Appdata from "./Components/data.js";
import mountfujiimg from "./images/mount fuji.jpg";

const App = () => {
  const Data = Appdata.map((entrydata) => {
    return (
      <Entry
        src={entrydata.img.src}
        alt={entrydata.img.src}
        title={entrydata.title}
        country={entrydata.country}
        date={entrydata.dates}
        text={entrydata.text}
      />
    );
  });
  return (
    <>
      <Header />
      <div className="space-y-5">{Data}</div>
    </>
  );
};

export default App;

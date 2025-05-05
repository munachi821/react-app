//import Main from "./Components/Main";
import Header from "./Components/Header";
import Entry from "./Components/entry";
//import mountfujiimg from "./images/mount fuji.jpg";
import JokesData from "./jokesData";
import Joke from "./Components/joke";

const App = () => {
  const jokesElement = JokesData.map((joke) => {
    return <Joke Setup={joke.setup} Punchline={joke.punchline} />;
  });
  return (
    <>
      <div>{jokesElement}</div>
      {/* <Header />
      <Entry
        img={{
          src: mountfujiimg,
          alt: "mount fuji img",
        }}
        title="Mount Fuji"
        country="JAPAN"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meteres (12,380 feet). Mount Fuji is the single most popular tourist site in japan, for both Japanese and foreign tourists."
      /> */}
    </>
  );
};

export default App;

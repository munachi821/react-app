//import Main from "./Components/Main";
import Joke from "./Components/joke";
import Header from "./Components/Header";
import Entry from "./Components/entry";
import Contact from "./Components/contact cat";

const App = () => {
  return (
    <>
      {/* <Header />
      <Entry /> */}
      <div className="flex space-x-4">
        <Contact
          name="Munachi"
          phoneNumber="09060593296"
          email="munaonye9@email.com"
        />
        <Contact
          name="Ihuoma"
          phoneNumber="09030511735"
          email="ihuomaonye9@email.com"
        />
        <Contact
          name="Chiadikobi"
          phoneNumber="08035409193"
          email="muchiadie9@email.com"
        />
        <Contact
          name="Chimdiebube"
          phoneNumber="08034477788"
          email="diebubeye9@email.com"
        />
      </div>
      <Joke Punchline="I can't wait to see her face light up when she opens it" />
      <Joke
        Setup="How did the hacker escape the police"
        Punchline="He just ransomware"
      />
      <Joke
        Setup="Why don't pirates travel on mountain roads?"
        Punchline="Scurvy"
      />
      <Joke
        Setup="Why do bees stay in the hive in the winter?"
        Punchline="Swarm"
      />
      <Joke
        Setup="What's the best thing about swizerland?"
        Punchline="I don't know, but the flag is a big plus!"
      />
    </>
  );
};

export default App;

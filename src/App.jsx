//import Main from "./Components/Main";
import Header from "./Components/Header";
import Entry from "./Components/entry";
import mountfujiimg from "./images/mount fuji.jpg";

const App = () => {
  return (
    <>
      <Header />
      <Entry
        img={{
          src: mountfujiimg,
          alt: "mount fuji img",
        }}
      />
    </>
  );
};

export default App;

//import Main from "./Components/Main";
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
    </>
  );
};

export default App;

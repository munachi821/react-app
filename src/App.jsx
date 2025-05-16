import Header from "./Components/Header";
import Main from "./Components/Main";
import "./Components/index.css";
const App = () => {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
  }
  return (
    <>
      {/* <Header />
      <Main /> */}
      <section>
        <h1>Signup Form</h1>
        <form action={signUp}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            id="email"
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />

          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default App;

import Header from "./Components/Header";
import Main from "./Components/Main";
import "./Components/index.css";
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    formEl.reset();
  }
  return (
    <>
      {/* <Header />
      <Main /> */}
      <section>
        <h1>Signup Form</h1>
        <form method="post" onSubmit={handleSubmit}>
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

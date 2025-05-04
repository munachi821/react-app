const Joke = (props) => {
  return (
    // {if props.Setup if truthy then(which is the &&) will run the next code <h1>}
    <>
      {props.Setup && <h1>Setup: {props.Setup}</h1>}
      <p>
        <b>PunchLine: </b>
        {props.Punchline}
      </p>
      <hr />
    </>
  );
};

export default Joke;

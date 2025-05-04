const Joke = (props) => {
  return (
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

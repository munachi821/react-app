import { useEffect, useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "work into modor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((memeText) => ({
      ...memeText,
      [name]: value,
    }));
  }

  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      console.log("effect ran");
    },
    [count]
  );

  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  /* console.log(starWarsData); */
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            onChange={handleChange}
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
      <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </main>
  );
}

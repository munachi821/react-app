import { useEffect, useState } from "react";

export default function Main() {
  /* const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "work into modor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [imgflipArray, setImgFlipArray] = useState([]);

  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((memeText) => ({
      ...memeText,
      [name]: value,
    }));
  }

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setImgFlipArray(data.data.memes));
  }, []);
  const randomImg = Math.floor(Math.random() * imgflipArray.length);
  console.log(randomImg); */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resizeWindow() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizeWindow);
  });

  return (
    <main>
      {/* <div className="form">
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
      </div> */}
      <h1>{windowWidth + "px"}</h1>
    </main>
  );
}

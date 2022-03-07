import { useState } from "react";
import axios from "axios";
const GifBoard = ({
  gifs,
  setGifs,
  gifToggle,
  setGifToggle,
  chat,
  setChat,
  setMedia,
  trending,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  function onGifClick(id) {
    let gifToAttach = gifs.find((gif) => gif.id === id);

    setMedia(gifToAttach.images.fixed_height.url);
    setGifToggle(false);
    // setChat(chat.concat(<img src={gifToAttach.images.fixed_height.url} alt="gif" />))
  }

  function onGifSearch(e) {
    setSearchTerm(e.target.value);

    if (e.target.value) {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=${process.env.REACT_APP_KEY}&limit=10`
        )
        .then((res) => setGifs(res.data.data));
    } else if (!e.target.value) {
      setGifs(trending);
    }
  }
  return (
    <div
      className="gif-pad w-3/4 h-80 md: w-2/4 "
      style={gifToggle ? {} : { display: "none" }}
    >
      <input
        className=" m-2 p-1 rounded-lg"
        placeholder="search for a gif"
        value={searchTerm || ""}
        onChange={(e) => {
          onGifSearch(e);
        }}
      />{" "}
      <br />
      {gifToggle
        ? gifs.map((gif) => (
            <button
              key={gif.id}
              onClick={() => {
                onGifClick(gif.id);
              }}
            >
              {" "}
              <img
                className="w-34 h-28 px-2"
                src={gif.images.fixed_height.url}
                alt="gif"
              />
            </button>
          ))
        : ""}
    </div>
  );
};
export default GifBoard;

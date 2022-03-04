import axios from "axios";
import Input from "./components/Input";
import Display from "./components/Display";
import GifBoard from "./components/GifBoard";
import { useState, useEffect } from "react";

function App() {
  // single message/ post
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [media, setMedia] = useState("");
  const [trending, setTrending] = useState([]);

  // list of all posts/texts
  const [chat, setChat] = useState([
  ]);
  // gifbar
  const [gifs, setGifs] = useState([]);
  // toggle gif view
  const [gifToggle, setGifToggle] = useState(false);

  // Trending Gifs
  useEffect(() => {
    // "http://api.giphy.com/v1/gifs/trending&api_key=YOUR_API_KEY"
    axios
      .get(
        `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_KEY}`
      )
      .then((res) => {
        setTrending(res.data.data);
        setGifs(res.data.data);
      });
  }, []);

  return (
    <div className=" m-auto p-1">
      <h1 className="text-center text-xl">GIPHY POST</h1>
      <Input
        msg={msg}
        setMsg={setMsg}
        chat={chat}
        setChat={setChat}
        gifToggle={gifToggle}
        setGifToggle={setGifToggle}
        media={media}
        setMedia={setMedia}
        name={name}
        setName={setName}
      />
      <Display chat={chat} setChat={setChat} />
      <GifBoard
        gifs={gifs}
        setGifs={setGifs}
        gifToggle={gifToggle}
        setGifToggle={setGifToggle}
        setChat={setChat}
        chat={chat}
        setMedia={setMedia}
        trending={trending}
      />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

// displays chat
const Display = ({ chat }) => {
  const [randomId, setRandomId] = useState(0);

  useEffect(() => {
    setRandomId(
      (function randomImgId() {
        return Math.floor(Math.random() * 60);
      })()
    );
  }, []);

  let chatlist = chat.map((c, i) => (
    <li className="post p-2 " key={i}>
      <header>
        <img
          src={`https://i.pravatar.cc/150?img={${randomId}`}
          className="avatar w-10 rounded-full   "
          alt="avatar"
        />
        <h2 className="text-2xl text-teal-700 p-2">{c.name}</h2>{" "}
      </header>
      <span className="text-xl py-10"> {c.msg} </span> <img src={c.gif} />{" "}
    </li>
  ));

  return <ul className="px-2">{chatlist}</ul>;
};

export default Display;

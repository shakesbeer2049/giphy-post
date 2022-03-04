// input bar and buttons
const Input = ({
  msg,
  setMsg,
  setChat,
  chat,
  gifToggle,
  setGifToggle,
  media,
  setMedia,
  setName,
  name,
}) => {
  function onClickSend(e) {
    let msgObj = { name, msg, gif: media };

    if (!name || !msg) alert("Enter all fields!");
    else {
      setChat(chat.concat(msgObj));
      setMsg("");
      setMedia("");
      setName("");
    }
  }

  return (
    <div className="input-comp">
      <label htmlFor="username" className="pl-2">Username </label>
      <input
        name="username"
        placeholder="username"
        className="border-black border-2 m-2  "
        value={name || ""}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <textarea
        placeholder="What's on your mind..."
        className="border-black border-2 w-5/6 h-32 p-0 m-2 "
        value={msg || ""}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />{" "}
      <br />
      <img src={`${media}`} />
      <div className="buttons flex justify-between w-4/5 pl-2 ml-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
          onClick={() => {
            setGifToggle(!gifToggle);
          }}
        >
          {" "}
          Gifs{" "}
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md "
          onClick={() => {
            onClickSend();
          }}
        >
          {" "}
          Post{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;

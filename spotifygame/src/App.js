import { useEffect, useRef, useState } from "react";
import "./App.css";
import SpotifyFetch from "./component/SpotifyFetch";

function App() {
  const inputRef = useRef(null);
  const [artist, setArtist] = useState();
  const [image, setImage] = useState();

  return (
    <div className="App text-3xl">
      <div className="mt-3 flex gap-3 justify-center">
        <input ref={inputRef} className="border-4 " type="text" placeholder=" Search for artist" />
        <button className="border-4 rounded-xl p-3 border-black bg-yellow-300" onClick={""}>Guzik</button>
      </div>
      {artist}
      <img src={image} alt="?"/>
    </div>
  );
}

export default App;

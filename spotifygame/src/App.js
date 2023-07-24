import { useEffect, useRef, useState } from "react";
import "./App.css";
import SpotifyFetch from "./component/SpotifyFetch";

function App() {
  const inputRef = useRef(null);
  const clientId = "548168a4880740b383c0bc3eeb15af1b";
  const secretId = "49ac9bff32114ebd8b64c89daba3bc16";
  const [spotifyAccessToken, setSpotifyAcessToken] = useState();
  const [artist, setArtist] = useState();
  const [image, setImage] = useState();
  const url = "https://accounts.spotify.com/api/token";
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${secretId}`,
      })
        .then((response) => response.json())
        .then((json) => {
          setSpotifyAcessToken(json.access_token);
        });
    };
    fetchData();
  }, []);

  const artistSearch = async () => {
    const searchInput = inputRef.current.value;
    const artistId = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      }
    );
    artistId.json().then((response) => {
      setArtist(response.artists.items[0].name);
      setImage(response.artists.items[0].images[0].url)
    });
  };

  return (
    <div className="App text-3xl">
      <div className="mt-3 flex gap-3 justify-center">
        <input ref={inputRef} className="border-4 " type="text" placeholder=" Search for artist" />
        <button className="border-4 rounded-xl p-3 border-black bg-yellow-300" onClick={artistSearch}>Guzik</button>
      </div>
      {artist}
      <img src={image} alt="?"/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import SpotifyFetch from "./component/SpotifyFetch";

function App() {
  const clientId = "548168a4880740b383c0bc3eeb15af1b";
  const secretId = "49ac9bff32114ebd8b64c89daba3bc16";
  const [spotifyAccessToken, setSpotifyAcessToken] = useState();
  const [artist, setArtist] = useState();
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
    const artistId = await fetch(
      "https://api.spotify.com/v1/search?q=" + "Kanye West" + "&type=artist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      }
    );
    artistId.json().then((response) => console.log(response));
  };

  return (
    <div className="App text-3xl">
      <button onClick={artistSearch}>Guzik</button>
      {artist}
      <SpotifyFetch />
    </div>
  );
}

export default App;

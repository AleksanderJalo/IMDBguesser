import React, { useRef, useState } from "react";
import { useStore } from "../stores/store";
import axios from "axios";
const ArtistSearch = () => {
  const inputRef = useRef(null);
  const { token } = useStore();
  const [artists, setArtists] = useState([]);
  const search = () => {
    axios
      .get("http://localhost:8000/search", {
        params: {
          token: token,
          artist: inputRef.current.value,
        },
      })
      .then((response) => setArtists(response.data));
  };
  return (
    <div>
      <div className="flex justify-center gap-12">
        <input
          ref={inputRef}
          className="border-4 border-black p-2"
          placeholder="Search for an artist"
        />
        <button
          className="border-4 border-black p-2 bg-yellow-400"
          onClick={search}
        >
          Search
        </button>
          </div>
          {artists.map(artist => <div key={artist.name}>{ artist.name}</div>)}
    </div>
  );
};

export default ArtistSearch;

import React, { useRef, useState } from "react";
import { useStore } from "../stores/store";
import axios from "axios";
import ArtistCard from "./ArtistCard";
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
      .then((response) => setArtists(response.data.slice(0, 5)))
      .then(console.log(artists));
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
      {artists.length > 0 && <div className="flex gap-10 mt-3 flex-wrap">
        {" "}
        {artists.map((artist) => (
          <div className="" key={artist.id}>
            <ArtistCard image={artist.images.length > 0 ? artist.images[0].url: ""} name={artist.name} />
          </div>
        ))}
      </div>}
    </div>
  );
};

export default ArtistSearch;

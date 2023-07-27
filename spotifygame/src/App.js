import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useStore } from "./stores/store";

function App() {
  const [movies, setMovies] = useState([]);
  const [cleanMovies, setCleanMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = (page) => {
      axios.get("http://localhost:8000/topMovies", {
        params: {
          page: page
        }
      }).then(res => setMovies(prev => [...prev, res])).catch((error) => console.log(error));
    };
    for (let i = 0; i < 6; i++){
      fetchMovies(i + 1);
    }

    for (const movieList of movies) {
      for (const movie of movieList.data) {
        setCleanMovies(prev => [...prev, movie]);
      }
    }

  },[])
  
  return (
    <div className="App text-3xl bg-[#121212] min-h-screen flex justify-center">
      <div className="flex flex-wrap gap-3 justify-center w-[70%] text-white">
        {cleanMovies.map(movie => <div>{ movie.title}</div>)}
      </div>
    </div>
  );
}

export default App;

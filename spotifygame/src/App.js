import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useStore } from "./stores/store";
import HomePage from "./Pages/HomePage";
function App() {
  const { addMovies } = useStore();
  const [moviesData, setMoviesData] = useState([]);
  const [cleanMovies, setCleanMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = (page) => {
      axios
        .get("http://localhost:8000/topMovies", {
          params: {
            page: page,
          },
        })
        .then((res) => addMovies(res.data))
        .catch((error) => console.log(error));
    };
    for (let i = 0; i < 6; i++) {
      fetchMovies(i + 1);
    }
  }, []);

  return (
    <div className="App min-h-screen flex w-full ">
      <HomePage />
    </div>
  );
} 

export default App;

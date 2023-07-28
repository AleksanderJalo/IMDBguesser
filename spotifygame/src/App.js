import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useStore } from "./stores/store";
import HomePage from "./Pages/HomePage";
import MovieGenrePage from "./Pages/MovieGenrePage";

function App() {
  const { addMovies, setGenres } = useStore();
  const [whichPage, setWhichPage] = useState("HomePage");
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
    const fetchGenres = () => {
      axios
        .get("http://localhost:8000/genres")
        .then((res) => setGenres(res.data))
        .catch((error) => console.log(error));
    };

    for (let i = 0; i < 6; i++) {
      fetchMovies(i + 1);
    }

    fetchGenres();
  }, []);
  const switchPage = (page) => {
    setWhichPage(page);
  }

  return (
    <div className="App min-h-screen flex w-full ">
      {whichPage === "HomePage" && <HomePage pageHandler={switchPage} />}
      {whichPage === "GenrePage" && <MovieGenrePage/>}
    </div>
  );
}

export default App;

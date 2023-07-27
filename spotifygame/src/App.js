import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useStore } from "./stores/store";

function App() {
  useEffect(() => {
    const fetchToken = () => {
      axios.get("http://localhost:8000/topMovies").then(res => console.log(res.data));
    };
    fetchToken();
  },[])
  
  return (
    <div className="App text-3xl bg-[#121212] min-h-screen flex justify-center">
      <div className="flex gap-3 justify-center w-[70%]">
      </div>
    </div>
  );
}

export default App;

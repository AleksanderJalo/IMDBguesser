import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import ArtistSearch from "./component/ArtistSearch";
import { useStore } from "./stores/store";

function App() {
  const { setToken } = useStore();
  useEffect(() => {
    const fetchToken = () => {
      axios.get("http://localhost:8000/auth").then(res => setToken(res.data));
    };
    fetchToken();
  },[setToken])
  
  return (
    <div className="App text-3xl bg-slate-400 h-min-full w-min-full">
      <div className="mt-3 flex gap-3 justify-center">
        <ArtistSearch/>
      </div>
    </div>
  );
}

export default App;

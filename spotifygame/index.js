const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.get("/topMovies", (req, res) => {
  const apiKey = process.env.API_KEY;
  const url = "https://api.themoviedb.org/3/movie/popular";
  const page = req.query.page;
  const options = {
    params: {
      page: page,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
  axios
    .get(url, options)
    .then((response) => res.json(response.data.results))
    .catch((error) => console.log(error));
});

app.get("/genres", (req, res) => {
  const apiKey = process.env.API_KEY;
  const url = "https://api.themoviedb.org/3/genre/movie/list";
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    }
  }
  axios.get(url, options).then(response => res.json(response.data.genres)).catch((error) => console.log(error));
})

app.listen(8000, () => {
  console.log("Server is running");
});
  
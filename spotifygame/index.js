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

// app.get("/auth", (req, res) => {
//   const id = process.env.SPOTIFY_ID;
//   const secret = process.env.CLIENT_SECRET;
//   const options = {
//     method: "POST",
//     params: {
//       grant_type: "client_credentials",
//       client_id: id,
//       client_secret: secret,
//     },
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded",
//     },
//   };
//   axios
//     .request("https://accounts.spotify.com/api/token", options)
//     .then((response) => res.json(response.data.access_token))
//     .catch((error) => {
//       console.error(error);
//     });
// });

// app.get("/search", (req, res) => {
//   const token = req.query.token;
//   const artist = req.query.artist;
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   axios.get(
//     `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
//     options
//   ).then((response) => res.json(response.data.artists.items))
// });

app.listen(8000, () => {
  console.log("Server is running");
});
  
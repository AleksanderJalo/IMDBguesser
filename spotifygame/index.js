const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/auth", (req, res) => {
  const id = process.env.SPOTIFY_ID;
  const secret = process.env.CLIENT_SECRET;
  const options = {
      method: "POST",
      params: {
          grant_type: "client_credentials",
          client_id: id,
          client_secret: secret
      },
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      },
  };
  axios
    .request("https://accounts.spotify.com/api/token", options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => {
  console.log("Server is running");
});

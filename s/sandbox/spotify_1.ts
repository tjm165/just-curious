// import * as SpotifyWebApi from "spotify-web-api-node";
const SpotifyWebApi = require("spotify-web-api-node");
import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

async function getSpotifyApi() {
  // credentials are optional
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  // Save the access token so that it's used in future calls
  await spotifyApi.setAccessToken(
    (
      await spotifyApi.clientCredentialsGrant()
    ).body["access_token"]
  );

  return spotifyApi;
}

async function run() {
  const spotifyApi = await getSpotifyApi();
  // Get Elvis' albums
  const res = await spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE");
  console.log("Artist albums", res.body);
  console.log(res);
}

run();

import * as SpotifyWebApi from "@spotify/web-api-ts-sdk";

import * as dotenv from "dotenv";
dotenv.config();

async function run() {
  const sdk = SpotifyWebApi.SpotifyApi.withClientCredentials(
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRET
  );

  const items = await sdk.search("The Beatles", ["track"]);

  console.table(
    items.tracks.items.map((item) => ({
      name: item.name,
      popularity: item.popularity,
    }))
  );

  console.log(items.tracks.items[0].external_urls.spotify);
}

run();

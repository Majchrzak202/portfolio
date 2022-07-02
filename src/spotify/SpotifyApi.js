const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refreshToken = prcess.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    console.log(basic)
}

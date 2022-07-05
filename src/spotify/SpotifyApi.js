const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  
  const response = await fetch(TOKEN_ENDPOINT, {
    
    method: 'POST', 
    headers: {
        Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
    }, 
    body: querystring.stringify({
        grant_type: "refreshToken",
        refreshToken,
    })
  })

  return response.json();
};

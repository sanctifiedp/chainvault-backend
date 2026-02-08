
export default function handler(req, res) {
  const state = Math.random().toString(36).substring(2);

  const authParams = new URLSearchParams({
    response_type: "code",
    client_id: process.env.X_CLIENT_ID,
    redirect_uri: process.env.X_REDIRECT_URI,
    scope: "users.read tweet.read",
    state: state,
    code_challenge: "chainvault_challenge",
    code_challenge_method: "plain"
  });

  const authUrl = `https://twitter.com/i/oauth2/authorize?${authParams.toString()}`;

  res.redirect(authUrl);
}

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Authorization code missing" });
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.X_CLIENT_ID,
        redirect_uri: process.env.X_REDIRECT_URI,
        code: code,
        code_verifier: "chainvault_challenge"
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      return res.status(500).json({ error: "Failed to obtain access token" });
    }

    // Fetch X user profile
    const userResponse = await fetch(
      "https://api.twitter.com/2/users/me?user.fields=profile_image_url,public_metrics,created_at,verified",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`
        }
      }
    );

    const userData = await userResponse.json();

    // Redirect back to Lovable with user data
    res.redirect(
      `https://chainv.lovable.app/x-success?user=${encodeURIComponent(
        JSON.stringify(userData.data)
      )}`
    );
  } catch (error) {
    res.status(500).json({ error: "X authentication failed" });
  }
}

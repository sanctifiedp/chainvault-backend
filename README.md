# ChainVault Backend

Backend API for ChainVault with X (Twitter) authentication integration.

## Features

- X (Twitter) OAuth 2.0 authentication flow
- Serverless API endpoints
- Vercel Web Analytics integration

## API Endpoints

### `/api/auth/x-start`
Initiates the X (Twitter) OAuth 2.0 authentication flow.

### `/api/auth/x-callback`
Handles the OAuth callback from X and exchanges the authorization code for an access token.

## Vercel Web Analytics

This project has Vercel Web Analytics enabled for tracking visitors and page views.

### Setup

1. **Enable Web Analytics in Vercel Dashboard**
   - Go to your [Vercel dashboard](https://vercel.com/dashboard)
   - Select your Project
   - Click the **Analytics** tab
   - Click **Enable**

2. **Analytics Implementation**
   The project includes the Vercel Web Analytics script in the landing page (`public/index.html`):
   ```html
   <script>
     window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
   </script>
   <script defer src="/_vercel/insights/script.js"></script>
   ```

3. **Verify Installation**
   After deployment, visit your site and check the browser's Network tab for a request to `/_vercel/insights/view`.

### Viewing Analytics Data

Once deployed and users have visited your site:
1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. View and filter analytics data

## Environment Variables

The following environment variables are required:

- `X_CLIENT_ID` - Your X (Twitter) OAuth 2.0 client ID
- `X_REDIRECT_URI` - The OAuth callback URL

## Deployment

Deploy to Vercel:

```bash
npm run deploy
```

Or connect your Git repository to Vercel for automatic deployments.

## License

MIT License - see [LICENSE](LICENSE) file for details.

# Tiny React App

A minimal React app powered by Vite.

```sh
npm install
npm run dev
```

Run `npm run build` to create a production build.

## Deploy to Vercel

The [deployment workflow](.github/workflows/deploy-vercel.yml) deploys to production
on every push to `master`. You can also run **Deploy to Vercel** manually from the
GitHub Actions tab with `master` selected.

Create a Vercel project for this app, then add these repository secrets under
**Settings → Secrets and variables → Actions**:

| Secret | Description |
| --- | --- |
| `VERCEL_TOKEN` | Access token for your Vercel account |
| `VERCEL_ORG_ID` | Your Vercel account/team ID |
| `VERCEL_PROJECT_ID` | Your Vercel project ID |

Use the Vite framework preset, repository root as the root directory,
`npm run build` as the build command, and `dist` as the output directory in Vercel.
The workflow pulls those project settings, builds on GitHub Actions, and deploys
the build output using the [Vercel CLI workflow](https://vercel.com/kb/guide/how-can-i-use-github-actions-with-vercel).

# Vite React TypeScript Starter with Cloudflare Workers

This project is a React TypeScript application built with Vite and deployed to Cloudflare Workers.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🌐 Cloudflare Workers deployment
- 🚀 Optimized for performance

## Development

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js
- [Cloudflare account](https://dash.cloudflare.com/)

### Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start development server:
   ```bash
   bun run dev
   ```

3. For local Cloudflare Workers development:
   ```bash
   bun run wrangler:dev
   ```

## Deployment

### First Time Setup

1. Install Wrangler CLI (if not already installed):
   ```bash
   bun add -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Update the `wrangler.toml` file with your desired project name.

### Deploy

1. Build and deploy to production:
   ```bash
   bun run deploy:production
   ```

2. Deploy to staging:
   ```bash
   bun run deploy:staging
   ```

3. Deploy to default environment:
   ```bash
   bun run deploy
   ```

### View Logs

```bash
bun run wrangler:tail
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── worker.ts      # Cloudflare Worker entry point
│   └── ...
├── dist/              # Build output
├── wrangler.toml      # Cloudflare Workers configuration
├── build-worker.js    # Worker build script
└── ...
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run build:worker` - Build only the worker
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun run deploy:staging` - Deploy to staging environment
- `bun run deploy:production` - Deploy to production environment
- `bun run wrangler:dev` - Start local Workers development
- `bun run wrangler:tail` - View Workers logs

## Environment Variables

The project uses environment-specific configurations defined in `wrangler.toml`:

- `production` - Production environment
- `staging` - Staging environment
- Default - Development environment

## Performance

This setup provides:
- Edge computing with Cloudflare Workers
- Global CDN distribution
- Automatic HTTPS
- DDoS protection
- Zero-downtime deployments 
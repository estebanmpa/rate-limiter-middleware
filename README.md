# rate-limiter

A small Express + TypeScript API with a Redis-backed rate limiter middleware.

Requests are limited per client IP to **10 requests every 60 seconds**. Once the limit is hit, the API responds with `429 Too Many Requests` until the window resets.

## Requirements

- [Node.js](https://nodejs.org/) 24+
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) and Docker Compose (for running Redis, or the whole stack)

## Getting started

Install dependencies:

```bash
yarn
```

### Run with Docker Compose

This builds the server image and starts it alongside a Redis container:

```bash
docker compose up --build
```

The API will be available at [http://localhost:3000](http://localhost:3000).


## Configuration

Environment variables are loaded from `.env`:

| Variable    | Description                | Default                          |
| ----------- | --------------------------- | --------------------------------- |
| `PORT`      | Port the server listens on  | `3000`                            |
| `REDIS_URL` | Connection URL for Redis    | `redis://cache-container:6379`    |

## Scripts

| Command       | Description                              |
| ------------- | ----------------------------------------- |
| `yarn dev`    | Run the server in watch mode with `tsx`   |
| `yarn build`  | Compile TypeScript to `dist/`             |
| `yarn start`  | Run the compiled server from `dist/`      |

## API

| Method | Path | Description                                   |
| ------ | ---- | ---------------------------------------------- |
| `GET`  | `/`  | Health check endpoint, subject to rate limiting |

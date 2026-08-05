# rate-limiter

A small Express + TypeScript API with an in-memory rate limiter middleware.

Requests are limited per client IP to **5 requests every 5 seconds**. Once the limit is hit, the API responds with `429 Too Many Requests` until the window resets.

## Requirements

- [Node.js](https://nodejs.org/) 24+
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) and Docker Compose (optional, to run the whole stack)

## Getting started

Install dependencies:

```bash
yarn
```

### Run with Docker Compose

This builds and starts the server:

```bash
docker compose up --build
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## API

| Method | Path | Description                                   |
| ------ | ---- | ---------------------------------------------- |
| `GET`  | `/`  | Default endpoint, subject to rate limiting |

### Example

```bash
curl -i http://localhost:3000/
```

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"currentDateTime":"2026-08-05T12:00:00.000Z"}
```

After 5 requests within a 5-second window from the same IP, subsequent requests receive:

```
HTTP/1.1 429 Too Many Requests
```

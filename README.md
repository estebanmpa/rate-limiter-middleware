# rate-limiter

A small Express + TypeScript API with an in-memory rate limiter middleware.

Requests are limited per `x-user-id` header to **5 requests every 5 seconds**. Once the limit is hit, the API responds with `429 Too Many Requests` until the window resets.

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
curl -i -H "x-user-id: user-123" http://localhost:3000/
```

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"currentDateTime":"2026-08-05T12:00:00.000Z"}
```

After 5 requests within a 5-second window from the same `x-user-id`, subsequent requests receive:

```
HTTP/1.1 429 Too Many Requests
```

## Testing

Run the test suite with:

```bash
yarn test
```

This runs the Jest suite (via `@swc/jest`, so TypeScript is transpiled without type-checking) covering:

- `GET /` returns `200` with a `currentDateTime` payload.
- The rate limiter returns `429 Too Many Requests` once a client exceeds `RATE_LIMITER_MAX_REQUESTS` requests.

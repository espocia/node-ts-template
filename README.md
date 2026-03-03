# nodejs-auth

A Node.js REST API built with Express and TypeScript.

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation

```bash
npm install
```

## Development

Run the development server with hot-reload:

```bash
npm run dev
```

The server will start on port 3000.

## Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

## Production

Run the compiled application:

```bash
npm start
```

## API Endpoints

### GET /hello

Returns a hello world message with timestamp.

**Response:**
```json
{
  "message": "hello world",
  "time": "2026-03-03T12:00:00.000Z",
  "items": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
```

### POST /user

Creates a new user.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "id": "abc123",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2026-03-03T12:00:00.000Z"
}
```

## Tech Stack

- Express 5
- TypeScript
- ESLint + Prettier
- dotenv

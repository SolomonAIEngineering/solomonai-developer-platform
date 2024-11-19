# Overview

**tus-server** is a high-performance implementation of the [TUS protocol](https://tus.io) for resumable file uploads, designed to run seamlessly on [Cloudflare Workers](https://www.cloudflare.com/products/workers/) and utilize [Cloudflare R2](https://www.cloudflare.com/products/r2/) for scalable, cost-effective storage.

This service enables reliable, resumable uploads that can handle interruptions and recover seamlessly, making it an excellent choice for modern applications requiring efficient upload handling, such as file-sharing platforms, media services, and cloud storage solutions.

---

## Features

- **TUS Protocol Compliance**: Fully implements the TUS specification for resumable file uploads.
- **Cloudflare Workers Integration**: Executes serverless upload handling at the edge for low-latency performance.
- **R2 Storage Integration**: Leverages Cloudflare R2 for scalable, cost-effective object storage.
- **Authentication**: Secures upload operations with HMAC authentication using a shared secret.
- **Developer-Friendly**: Easy setup with Node.js and `wrangler` for local development and deployment.
- **Extensible**: Customizable to meet the needs of various upload workflows.

---

## Building

### Prerequisites

You'll need [Node.js](https://nodejs.org/). If you use [nvm](https://github.com/creationix/nvm), run:

```bash
nvm use
```

To install dependencies:

```bash
npm install
```

To deploy or run non-local development, install and authenticate the [`wrangler`](https://developers.cloudflare.com/workers/wrangler/install-and-update/) CLI tool. Follow the Cloudflare documentation to authenticate your account.

---

## Testing

The server requires authentication via a signature generated using a shared secret. For development, you can provide this secret in a `.dev.vars` file:

```bash
cat .dev.vars
SHARED_AUTH_SECRET = "test"
```

### Local Development

Run a development server that you can interact with locally:

```bash
wrangler dev
```

### Unit Testing

Run the test suite:

```bash
npm test
```

---

## Deploying

### One-Time Setup

1. **Create an R2 Bucket**
   - Set up an R2 bucket on Cloudflare and update the binding in `wrangler.toml` to match the bucket's name.

2. **Configure Shared Auth Secret**
   - Add a base64-encoded shared authentication secret to your Cloudflare environment:

   ```bash
   wrangler secret put SHARED_AUTH_SECRET
   ```

### Deployment

Deploy to staging or production environments with the following command:

```bash
wrangler deploy -e <staging|production>
```

---

## Configuration

### Environment Variables

The following environment variables are used to configure the server:

- **`SHARED_AUTH_SECRET`**: The shared secret for HMAC authentication.
- **`R2_BUCKET`**: The name of the R2 bucket to store uploaded files.

These should be set in your `.dev.vars` for local development and via `wrangler` for deployment.

---

**tus-server** provides a robust, scalable foundation for handling resumable uploads, enabling seamless file transfer experiences in a serverless environment.
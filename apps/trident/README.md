# Trident / Open Source Form Backend

<div align="center">
    <img src="../../logo.svg" width="128" alt="Trident Logo" />
</div>

## Overview

**Trident** is an open-source backend solution for handling form submissions, developed by **Solomon AI**. It is designed to simplify data collection and management for web applications. Trident eliminates the need for server-side code to process form data, allowing developers to focus on front-end development. With Trident, you can effortlessly receive form submissions, store them securely, and get notified via email.

Built with [TypeScript](https://www.typescriptlang.org/) and leveraging modern web technologies, Trident ensures secure, reliable, and efficient handling of form data. It integrates seamlessly with services like [Resend](https://resend.com/) for email notifications and uses a PostgreSQL database for data persistence. The platform is easy to deploy on [Vercel](https://vercel.com/) and supports Docker for a consistent development environment.

[Watch a Demo](https://x.com/youngbloodcyb/status/1831808232966516972)

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Running Locally Without Docker](#running-locally-without-docker)
  - [Running Locally With Docker](#running-locally-with-docker)
- [Deployment](#deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
- [API Reference](#api-reference)
  - [Endpoints](#endpoints)
    - [Submit Form Data](#submit-form-data)
    - [Retrieve Form Submissions](#retrieve-form-submissions)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Coding Standards](#coding-standards)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

- **Simple Form Data Handling**: Receive and store form submissions via a straightforward API without the need for custom backend code.
- **Email Notifications**: Automatically send email notifications upon form submissions using [Resend](https://resend.com/).
- **Secure Data Storage**: Store form data securely in a PostgreSQL database with support for migrations and schema management.
- **User Authentication**: Integrated authentication using NextAuth for managing access to submission data.
- **Easy Deployment**: One-click deployment to Vercel with minimal configuration required.
- **TypeScript Support**: Built with TypeScript for enhanced code quality and developer experience.
- **Docker Support**: Option to use Docker for a consistent and isolated development environment.

## Architecture

Trident is architected as a lightweight backend service focused on form data handling. The key components include:

- **API Server**: Built with Next.js, handling API routes for form submissions and data retrieval.
- **Email Service**: Utilizes the Resend API to send email notifications upon form submissions.
- **Database Layer**: Employs PostgreSQL for persistent storage, managed through Drizzle ORM for schema migrations.
- **Authentication Layer**: Implements user authentication and session management using NextAuth.
- **Deployment Platform**: Optimized for deployment on Vercel, benefiting from serverless functions and global CDN.

**Design Principles:**

- **Simplicity**: Focused on doing one thing well—handling form submissions.
- **Scalability**: Capable of handling increased load without significant changes.
- **Security**: Ensures data is transmitted and stored securely.
- **Modularity**: Components are designed to be easily replaceable or extendable.

## Quick Start

To set up Trident in your development environment, follow these steps:

1. **Clone the Repository and Navigate to the Project Directory:**

   ```sh
   git clone https://github.com/SolomonAIEngineering/trident.git
   cd trident/main
   ```

2. **Set Up Environment Variables:**

   Copy the example environment file and configure it:

   ```sh
   cp .env.example .env.local
   ```

   Update `.env.local` with your own values (see [Environment Variables](#environment-variables)).

3. **Install Dependencies:**

   ```sh
   npm install
   ```

4. **Generate Database Migrations:**

   ```sh
   npm run drizzle-kit:generate
   ```

5. **Run Database Migrations:**

   ```sh
   npm run migrate
   ```

6. **Start the Development Server:**

   ```sh
   npm run dev
   ```

7. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000`.

## Getting Started

### Prerequisites

Ensure you have the following before starting:

- **Node.js**: Version 14.x or later (LTS recommended).
- **npm**: Version 6.x or later.
- **An Account with Resend**: Sign up at [Resend](https://resend.com/) to obtain an API key for email services.
- **An Account with Vercel**: Sign up at [Vercel](https://vercel.com/) for deployment purposes.
- **PostgreSQL Database**: You can use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or any other PostgreSQL instance.

### Environment Variables

Create a `.env.local` file at the root of your project and configure the following variables:

- `RESEND_API_KEY`: Your Resend API key for sending emails.
- `NEXTAUTH_SECRET`: A secret key used by NextAuth for session encryption.
- `NODE_ENV`: Set to `development` for local development.
- `POSTGRES_URL`: The connection string for your PostgreSQL database.

**Example `.env.local` File:**

```ini
RESEND_API_KEY=your-resend-api-key
NEXTAUTH_SECRET=your-nextauth-secret
NODE_ENV=development
POSTGRES_URL=postgres://user:password@host:port/database
```

**Note:** Ensure all environment variables are kept secure and are not committed to version control.

## Usage

### Running Locally Without Docker

1. **Install Dependencies:**

   ```sh
   npm install
   ```

2. **Set Up Environment Variables:**

   Make sure your `.env.local` file is properly configured.

3. **Generate Database Migrations:**

   ```sh
   npm run drizzle-kit:generate
   ```

4. **Run Database Migrations:**

   ```sh
   npm run migrate
   ```

5. **Start the Development Server:**

   ```sh
   npm run dev
   ```

6. **Access the Application:**

   Navigate to `http://localhost:3000` in your web browser.

### Running Locally With Docker

1. **Set Up Environment Variables:**

   Ensure your `.env.local` file is correctly set up.

2. **Run Docker Compose:**

   ```sh
   docker-compose up
   ```

3. **Access the Application:**

   Open `http://localhost:3000` in your web browser.

## Deployment

### Deploying to Vercel

You can deploy Trident to Vercel using the following steps:

1. **Push Your Code to GitHub:**

   ```sh
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel:**

   Use the Vercel deploy button for one-click deployment:

   <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSolomonAIEngineering%2Ftrident%2Ftree%2Fmain&env=RESEND_API_KEY,NEXTAUTH_SECRET,NODE_ENV,POSTGRES_URL&envDescription=NODE_ENV%20should%20be%20set%20to%20%60production%60%20for%20deployment.%20Resend%20will%20require%20an%20account%20to%20get%20an%20API%20key.&envLink=https%3A%2F%2Fgithub.com%2FSolomonAIEngineering%2Ftrident%2Ftree%2Fmain%23prerequisites&project-name=trident&repository-name=trident"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

3. **Configure Environment Variables:**

   In the Vercel dashboard, navigate to your project settings and add the following environment variables:

   - `RESEND_API_KEY`
   - `NEXTAUTH_SECRET`
   - `NODE_ENV` (set to `production`)
   - `POSTGRES_URL`

4. **Complete Deployment:**

   Vercel will automatically build and deploy your application.

## API Reference

### Endpoints

#### Submit Form Data

**Endpoint:**

```json
POST /api/forms/submit
```

**Description:**

Accepts form data and stores it in the database. Sends an email notification if configured.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

```json
{
  "formId": "contactForm",
  "data": {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "message": "I'm interested in your product."
  }
}
```

**Response:**

```json
{
  "success": true,
  "message": "Form submission received."
}
```

#### Retrieve Form Submissions

**Endpoint:**

```json
GET /api/forms/submissions
```

**Description:**

Retrieves stored form submissions. Requires user authentication.

**Request Headers:**

- `Authorization: Bearer YOUR_ACCESS_TOKEN`

**Query Parameters:**

- `formId` (optional): Filter submissions by a specific form ID.
- `limit` (optional): Number of records to return.
- `offset` (optional): Pagination offset.

**Response:**

```json
{
  "submissions": [
    {
      "id": "submission_123",
      "formId": "contactForm",
      "data": {
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "message": "I'm interested in your product."
      },
      "submittedAt": "2023-10-25T12:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 0
  }
}
```

## Development

### Project Structure

```bash
trident/
├── components/
├── lib/
│   ├── db/
│   │   ├── migrate.ts
│   │   └── index.ts
│   └── resend/
├── pages/
│   ├── api/
│   │   └── forms/
│   │       ├── submit.ts
│   │       └── submissions.ts
│   └── index.tsx
├── public/
├── styles/
├── tests/
├── .env.example
├── .env.local
├── docker-compose.yml
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

### Coding Standards

- **TypeScript Practices:**

  - Enable strict mode in `tsconfig.json`.
  - Use interfaces and types for data structures.
  - Prefer `async/await` over promises for asynchronous code.

- **Linting and Formatting:**

  - Use ESLint for linting (`npm run lint`).
  - Use Prettier for code formatting (`npm run format`).

- **Testing:**

  - Write unit tests for components and utilities.
  - Use Jest and React Testing Library.

- **Git Workflow:**

  - Use feature branches for new features.
  - Rebase before merging to keep commit history clean.
  - Write meaningful commit messages.

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the Repository**

2. **Create a Feature Branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Implement Your Changes and Write Tests**

4. **Run Tests:**

   ```sh
   npm test
   ```

5. **Commit Your Changes:**

   ```sh
   git commit -am 'Add new feature: description'
   ```

6. **Push to Your Fork:**

   ```sh
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

## Support

For support:

- **Issue Tracker:** Use the GitHub [Issues](https://github.com/SolomonAIEngineering/trident/issues) for bug reports and feature requests.
- **Email:** Contact us at [support@solomon-ai.co](mailto:support@solomon-ai.co)
- **Documentation:** Refer to the project [Wiki](https://github.com/SolomonAIEngineering/trident/wiki) for guides and FAQs.

---

Made with ❤️ by the **Solomon AI Team**

# Tecobit Academy

Tecobit Academy is a modern web application built with **Next.js 15** and **Payload CMS 3.0**. This repository contains the frontend application and the integrated headless CMS, connected to a MongoDB database.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **CMS:** [Payload 3.0](https://payloadcms.com/)
- **Database:** MongoDB
- **Styling:** Tailwind CSS & Radix UI Primitives
- **Language:** TypeScript
- **Package Manager:** `pnpm`

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.20.2+ or v20.9.0+)
- [pnpm](https://pnpm.io/) (v9 or v10)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)
- [Docker](https://www.docker.com/) & Docker Compose (Optional, for containerized environments)

## 💻 Local Development Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tecobit-academy
   ```

2. **Set up environment variables:**
   Copy the example environment file and update it with your own values.
   ```bash
   cp .env.example .env
   ```
   *Make sure to provide a valid `DATABASE_URL` (e.g., `mongodb://127.0.0.1/tecobit-academy`) and a secure `PAYLOAD_SECRET`.*

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   
   The application will be available at:
   - Frontend: `http://localhost:3000`
   - Payload Admin Panel: `http://localhost:3000/admin`

---

## 🐳 Docker Setup (Local)

If you prefer using Docker to avoid installing MongoDB locally, you can use the provided `docker-compose.yml`.

1. Make sure your `.env` file has the `DATABASE_URL` pointing to the mongo container:
   ```env
   DATABASE_URL=mongodb://mongo/tecobit-academy
   ```
2. Start the services:
   ```bash
   docker-compose up -d
   ```
   *This will start both MongoDB and the Next.js/Payload dev server on port 3000.*

---

## 🚢 Deployment Guide

This project is configured for standalone output, making it easy to deploy on VPS hosting, AWS, Vercel, or anywhere Docker is supported.

### Option 1: Standard Node.js Deployment (VPS / Bare Metal)

1. **Clone the repository** on your production server.
2. **Set up the `.env` file** with your production MongoDB URI and Payload Secret.
3. **Install dependencies:**
   ```bash
   pnpm install --frozen-lockfile
   ```
4. **Build the project:**
   ```bash
   pnpm run build
   ```
5. **Start the production server:**
   ```bash
   pnpm start
   ```
   *Alternatively, use a process manager like PM2 to keep the app running: `pm2 start pnpm --name "tecobit-academy" -- start`*

### Option 2: Docker Deployment (Recommended)

The project includes a multi-stage `Dockerfile` optimized for production, leveraging Next.js Standalone mode to drastically reduce image sizes.

1. **Build the Docker Image:**
   ```bash
   docker build -t tecobit-academy:latest .
   ```
2. **Run the Container:**
   ```bash
   docker run -p 3000:3000 \
     -e DATABASE_URL="mongodb://<your-production-db-url>" \
     -e PAYLOAD_SECRET="<your-secure-secret>" \
     tecobit-academy:latest
   ```

*(You can also set up a production `docker-compose.yml` that includes your production MongoDB and a reverse proxy like Nginx or Traefik).*

## 🧪 Testing
We use Playwright for E2E testing and Vitest for integration testing.

```bash
# Run all tests
pnpm run test

# Run specific testing suites
pnpm run test:e2e
pnpm run test:int
```

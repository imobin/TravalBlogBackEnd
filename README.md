# TravelBolg – Backend (Node.js + Express + Prisma + PostgreSQL/Neon)

A simple REST API that lets users create, read, update, and delete travel posts about their adventures, journeys, and trips.

## ✨ Features

- CRUD endpoints for posts
- PostgreSQL database hosted on **Neon**
- **Prisma ORM** with type-safe queries and migrations
- Clear API docs with request/response examples

## 🧰 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Language:** JavaScript/TypeScript (repo choice)

---

## 📦 Getting Started (Local)

### Prerequisites

- Node.js (v18+ recommended)
- A Neon PostgreSQL database (connection string)

### 1) Clone & Install

```bash
git clone <your-repo-url>
cd TravelBolg
npm install
```

### 2) Configure Environment

Create a `.env` file in the project root and add your Neon connection string:

```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require"
PORT=3000
```

> Note: `sslmode=require` is typical for Neon.

### 3) Prisma Setup

Generate the client and run your first migration (will create the `Post` table):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Open Prisma Studio (optional, GUI for your DB):

```bash
npx prisma studio
```

### 4) Start the Server

```bash
# JavaScript
npm run dev
# or
node src/server.js

# TypeScript (example)
npm run dev:ts

```

---

## 🗃️ Database Schema (Prisma)

```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id      Int      @id @default(autoincrement())
  author  String
  title   String
  content String
  cover   String
  date    DateTime @default(now())
}
```

> Columns summary:
>
> - `id`: Primary key, auto-incrementing integer
> - `author`: Text field for the post author
> - `title`: Text, **NOT NULL**
> - `content`: Text, **NOT NULL**
> - `cover`: Text (image URL/path), **NOT NULL**
> - `date`: DateTime, defaults to creation time

---

## 🧭 API Endpoints

Base URL: `http://localhost:${PORT || 3000}`

| Method | Endpoint     | Description                   |
| -----: | ------------ | ----------------------------- |
|    GET | `/posts`     | Retrieve all posts            |
|    GET | `/posts/:id` | Retrieve a post by ID         |
|   POST | `/posts`     | Create a new post             |
|    PUT | `/posts/:id` | Update an existing post by ID |
| DELETE | `/posts/:id` | Delete a post by ID           |

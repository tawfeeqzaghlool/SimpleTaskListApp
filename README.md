# Brikl backend engineer assignment

## Introducing the Alpha

Alpha is the new startup company we are developing a cutting edge task management system with modern technology.

You will be getting involved on this! We have setting up user service to manage user in our system and with our solid task management project we can get the work done.

## Functionality

### Task management

- Create a new list
- Create a new task in a list (the task should be prepended to the list and the
  status should indicate it has not been completed)
- Update a task (title and status)
- Move a task to a specific position in the list
- Retrieve all lists and their tasks

## Getting start

- [Prerequisites](#prerequisites)
- [Setup](#setup)

### Prerequisites

Make sure you have these tools installed

- Docker (Running)
- Node.js >= 14
- Node package manager, preferably `pnpm` it is a Fast, disk space efficient package manager

### Setup

This is the instruction to setup this project and run in your local machine. Note that this instruction uses `pnpm` as a package manager. You may replace these commands corresponding to your package manager.

1. Copy `.env.example` file and rename it to `.env`.
2. Install dependencies. by running `pnpm install`
3. Run `docker compose up -d` to start docker containers in background.
4. Run `pnpm db:migrate` to initiate database. we are using PostgresSQL so make sure to edit `.env` file to match your Database details
5. Run `pnpm codegen` to generate TypeScript definition for GraphQL and Prisma client.
6. Run `pnpm start` to start the project.
7. Go to `http://localhost:4000`, you should see Apollo Playground with the queries for the `User`, `Task` and `List`. You may change the port according to `GATEWAY_PORT` in your `.env` file.

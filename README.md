![Node.js CI](https://github.com/Snowlly/todo-api-solo/actions/workflows/node-ci.yml/badge.svg)


# Todo API - Solo DevOps Project

## Objectives:

This project is a **REST API** for task management, developed with **Node.js**, connected to a **MongoDB** database, and fully **dockerized**.  
It serves as a base for future automation (CI/CD) in a DevOps context.

---

## Technical stack:

- Node.js + Express  
- MongoDB (via Docker)  
- Docker / Docker Compose  
- Postman (to test the API)  

---

## Prerequisites

- Docker Desktop installed and running

---

## Installation & execution

In the project folder:

```bash
docker-compose up --build
```

The API will be available at:

http://localhost:3000

Be careful, if port 3000 is already in use, localhost will likely be on another port.

### Quick test
Check that the API is running:

GET http://localhost:3000/health

The response should look like this:

```bash
{
  "status": "ok",
  "timestamp": "..."
}
```

---

## API Routes

#### POST /api/tasks

Create a task
```bash
{
  "title": "Faire les courses",
  "description": "Acheter du pain",
  "status": "todo"
}
```
#### GET /api/tasks

Retrieve all tasks

#### GET /api/tasks/:id

Retrieve a specific task

#### PUT /api/tasks/:id

Update a task
```bash
{
  "status": "done"
}
```
#### DELETE /api/tasks/:id
Delete a task

### Task schema

{
  "_id": "uuid",
  "title": "string",
  "description": "string",
  "status": "todo | in-progress | done",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

---

## Project structure

The project is structured as follows:
```bash
todo-api/
├── src/
│   ├── routes/         # Routes Express
│   ├── models/         # Modèle Mongoose
│   ├── middleware/     # Gestion d’erreurs
│   └── app.js          # App principale
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```
## Agile management (Kanban)

GitHub Project (Kanban):
#### View the Kanban board

Link to the Kanban -> https://github.com/users/Snowlly/projects/5

Example of tickets used:

Create the CRUD for tasks
Dockerize the API with MongoDB

---

## Unit Tests (task.test.js)
Tests written for the Task model located in src/models/task.js using Jest.

File location:

tests/unit/task.test.js
Description:

The tests cover the following operations:

#### Create: Creation of valid tasks and error handling (missing description)
#### Read: Reading a task by ID, reading all tasks, handling non-existent IDs
#### Update: Updating fields (status, title, description) and status validation

Command to run the tests:
```bash
npm test
```
## CI/CD
GitHub Actions

A continuous integration workflow is set up using GitHub Actions. It runs the following steps on each push or pull request to the main branch:

Install dependencies
Start a MongoDB instance via Docker service
Run unit tests
Workflow file:
```bash
.github/workflows/node-ci.yml
```

# Evan MARTIN



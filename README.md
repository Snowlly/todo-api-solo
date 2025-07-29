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


# Evan MARTIN



# Todo API - Projet Solo DevOps

## les objectifs :

Ce projet est une **API REST** de gestion de tâches, développée avec **Node.js**, connectée à une base **MongoDB**, et entièrement **dockerisée**.  
Il sert de base pour des automatisations futures (CI/CD) dans un contexte DevOps.

---

## Stack technique :

- Node.js + Express
- MongoDB (via Docker)
- Docker / Docker Compose
- Postman (pour tester l’API)

---


## Prérequis

- Docker Desktop installé et le lancer

---

## Installation & exécution

Dans le dossier du projet :

```bash
docker-compose up --build
```

L’API sera disponible sur :

http://localhost:3000

Attention car si le port 3000 est déjà utilisé, le localhost sera sûrement sur un autre port.

### Test rapide
Vérifie que l’API tourne :

GET http://localhost:3000/health

La réponse devrait être sous cette forme :

```bash
{
  "status": "ok",
  "timestamp": "..."
}
```

---

## Routes de l'API

#### POST /api/tasks
Créer une tâche
```bash
{
  "title": "Faire les courses",
  "description": "Acheter du pain",
  "status": "todo"
}
```
#### GET /api/tasks
Récupérer toutes les tâches

#### GET /api/tasks/:id
Récupérer une tâche spécifique

#### PUT /api/tasks/:id
Modifier une tâche
```bash
{
  "status": "done"
}
```
#### DELETE /api/tasks/:id
Supprimer une tâche

### Modèle de données

{
  "_id": "uuid",
  "title": "string",
  "description": "string",
  "status": "todo | in-progress | done",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

---

## Structure du projet

Le projet est structuré comme ceci :
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
## Gestion Agile (Kanban)

GitHub Project (Kanban) :
#### Voir le Kanban

Lien vers le Kanban -> https://github.com/users/Snowlly/projects/5

Exemples de tickets utilisés :

Créer le CRUD pour les tâches
Dockeriser l’API avec MongoDB


# Evan MARTIN



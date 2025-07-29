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


### Prérequis

- Docker Desktop installé et le lancer

### Installation & exécution

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

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Mongo connection
mongoose.connect('mongodb://mongo:27017/todo_db')
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.error('Erreur MongoDB:', err));

// get tasks
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

module.exports = app;

const PORT = process.env.PORT || 3000;

// Listening
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});


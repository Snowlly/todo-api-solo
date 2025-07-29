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

mongoose.connect('mongodb://mongo:27017/todo_db')
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.error('Erreur MongoDB:', err));

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

module.exports = app;

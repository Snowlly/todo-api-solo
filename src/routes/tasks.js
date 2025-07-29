const express = require('express');
const router = express.Router();
const Tasks = require('../models/task');

// POST /tasks
router.post('/', async (req, res) => {
    try {
        const task = await Tasks.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /tasks
router.get('/', async (req, res) => {
    const tasks = await Tasks.find();
    res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
    const task = await Tasks.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tasks not found' });
    res.json(task);
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
